import { Request, Response } from "express";
import { Token } from "../entity/Token";
import { generateToken } from "../utils/token";
import AppDatasource from "../datasources/data-source-app-db";
import { User } from "../entity/User";
import { checkPassword } from "../utils/auth";

export class TokenController {
    static async createAPIKey(req: Request, res: Response) {
        const { email, password } = req.body;

        const userRepository = AppDatasource.getRepository(User);
        const user = await userRepository.findOneBy({ email: email });


        if (!user) {
            res.status(404).send({ error: 'Usuario no Encontrado' });
            return;
        }

        const isPasswordCorrect = await checkPassword(password, user.password);

        if (!isPasswordCorrect) {
            const error = new Error('Credenciales Incorrectas');
            res.status(401).json({ error: error.message });
            return;
        }

        const token = new Token();
        token.token = generateToken();
        token.user = user;
        AppDatasource.manager.save(token);

        res.send(token.token);
    }
}