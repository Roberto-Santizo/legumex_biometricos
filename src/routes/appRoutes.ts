import { Router } from "express"
import { body } from "express-validator";
import { TokenController } from "../controllers/TokenController";
import { handleInputErrors } from "../middlewares/validation";

const router = Router();

router.post('/',
    body('email').isEmail().withMessage('El correo no es válido'),
    body('password').notEmpty().withMessage('La contraseña es requerida'),
    handleInputErrors,
    TokenController.createAPIKey
);


export default router;