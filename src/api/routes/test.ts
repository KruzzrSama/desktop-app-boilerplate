import { NextFunction, Request, Response, Router } from "express";

export default class TestRoutes {
    static async testGet(req: Request, res: Response) {
        res.send("GET OK!");
    }

    static async testPost(req: Request, res: Response) {
        const { id } = req.body;
        res.send(`GET OK! Id: ${id}`);
    }
}