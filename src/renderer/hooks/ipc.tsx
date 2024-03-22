import React, { createContext, useContext } from "react";
const { ipcRenderer } = typeof window !== "undefined" && window.require("electron");

function send<T>(channel: string, ...params: any[]): Promise<T> {
    ipcRenderer.send(channel, params);
    return new Promise(resolve => {
        ipcRenderer.once(`response.${channel}`, (event, response) => resolve(response));
    })
}

const values = { send };

const IpcContext = createContext(values);

const IpcProvider = (props: any) => {
    return <IpcContext.Provider value={values} {...props} />
};
export const useIpc = () => useContext(IpcContext);

export default IpcProvider;