import { Request, Response, NextFunction } from "express";
import { Token } from "../entity/Token";
import AppDatasource from "../datasources/data-source-app-db";

export const authenticate = async (req: Request, res: Response, next: NextFunction) => {
    const tokenRepository = AppDatasource.getRepository(Token);
    const bearer = req.headers.authorization;

    if (!bearer) {
        const error = new Error('No autorizado');
        res.status(401).json({ error: error.message });
        return;
    }

    const token = await tokenRepository.findOneBy({ token: bearer });

    if (!token) {
        const error = new Error('Token no válido');
        res.status(401).json({ error: error.message });
        return;
    }

    next();
}