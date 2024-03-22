import chalk from "chalk";
export default class Logger {
    namespace: string;
    constructor(namespace: string) {
        this.namespace = namespace;
    }
    public error(content: string | any) {
        Logger.write(this.namespace, content, LogType.Error);
    }
    public success(content: string | any) {
        Logger.write(this.namespace, content, LogType.Success);
    }
    public info(content: string | any) {
        Logger.write(this.namespace, content, LogType.Information);
    }
    public warn(content: string | any) {
        Logger.write(this.namespace, content, LogType.Warning);
    }
    public normal(content: string | any) {
        Logger.write(this.namespace, content);
    }

    private static write(namespace: string, content: any, type?: LogType) {
        var coloredNamespace: string = chalk.bgWhite(` ${namespace.toUpperCase()} `);
        switch (type) {
            case LogType.Error: coloredNamespace = chalk.bgRed(` ${namespace.toUpperCase()} `); break;
            case LogType.Success: coloredNamespace = chalk.bgGreen(` ${namespace.toUpperCase()} `); break;
            case LogType.Information: coloredNamespace = chalk.bgBlue(` ${namespace.toUpperCase()} `); break;
            case LogType.Warning: coloredNamespace = chalk.bgYellow(` ${namespace.toUpperCase()} `); break;
            default: coloredNamespace = chalk.bgWhite(` ${namespace.toUpperCase()} `); break;
        }
        console.log(`${coloredNamespace} > ${content}`);
    }
}

enum LogType {
    Error,
    Success,
    Information,
    Warning
}