import {Router} from "express";
import * as categoriesController from '../controllers/category.controller'
import {findById} from "../repositories/emotion.repository";

const router = Router();

router.get('/',categoriesController.getAll)
router.get('/:categoryId',findById)

export default router;