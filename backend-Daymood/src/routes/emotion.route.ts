import { Router} from "express";
import * as emotionController from '../controllers/emotion.controller'

const router = Router();

router.get('/',emotionController.getAll)
router.post('/', emotionController.create)

export default router;