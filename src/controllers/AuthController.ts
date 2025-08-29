import { Request, Response } from "express";

export class AuthController {
    static async login(req: Request, res: Response) {
        res.send('aca');
    }
}