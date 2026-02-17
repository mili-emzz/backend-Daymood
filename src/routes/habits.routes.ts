import { Router } from 'express';
import {createHabitRecord} from "../controllers/habits.controllers";
//import {verifyAuth} from "../middlewares/auth.middleware";

const router = Router()
console.log('Rutas de habits cargadas');

// Log específico para esta ruta
router.post('/', (req, res, next) => {
    console.log('Hit en POST /habits');
    next();
}, createHabitRecord);

export default router;