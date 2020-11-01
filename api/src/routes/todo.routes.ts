import express from "express";
import todoController from "../controllers/todo.controller";

const router = express.Router();

router.get('/', todoController.getAll);
router.get('/:_id', todoController.getOne);
router.post('/', todoController.post);
router.put('/', todoController.put);
router.delete('/:_id', todoController.delete);

export default router;