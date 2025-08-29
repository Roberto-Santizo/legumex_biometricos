import { Router } from "express"
import { BiometricoController } from "../controllers/BiometricoController";
import { authenticate } from "../middlewares/auth";

const router = Router();
router.use(authenticate);

router.get('/', BiometricoController.getComodines);


export default router;