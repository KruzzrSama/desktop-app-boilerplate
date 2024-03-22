import express from "express";
import cors from "cors";
import Logger from "./logger";
import { createServer } from "http";
import router from "./router";
export default class WebService {
    private static app = express();
    private static logger = new Logger("WEB SERVICE");

    public static init() {
        this.app.use(express.urlencoded({ extended: false }));
        this.app.use(express.json({ strict: true }));
        this.app.use(cors());

        this.app.use("/api", router);

        createServer(this.app).listen(process.env.PORT, () => {
            this.logger.info(`Server has started: ${process.env.URL_PROTOCOL}://${process.env.URL_DOMAIN}`);
        });
    }
}