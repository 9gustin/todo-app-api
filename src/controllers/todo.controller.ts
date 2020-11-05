import express, { Request, Response } from "express"
import Todo from "../models/todo";

const todoController: any = {}

todoController.getAll = async (req: Request, res: Response): Promise<void> => {
    try {
        const data = await Todo.find();

        res.send({ data });
    }
    catch (err) {
        res.status(500).send({ message: "error", error: err });
    }
}

todoController.getOne = async (req: Request, res: Response): Promise<void> => {
    const id = req.params._id;

    if (id) {
        try {
            const data = await Todo.findById(id);

            res.send({ data });
        }
        catch (err) {
            res.status(500).send({ message: "error", error: err });
        }
    }
    else res.status(400).send({ message: "missing param id" })
}

todoController.post = async (req: Request, res: Response): Promise<void> => {
    if (req.body) {
        try {
            const todo = new Todo(req.body);
            await todo.save();
            res.status(201).send({ message: "successfully saved", data: todo });
        }
        catch (err) {
            res.status(500).send({ message: "error", error: err });
        }

    }
    else res.status(400).send({ message: "missing todo" })
}

todoController.delete = async (req: Request, res: Response): Promise<void> => {
    const id = req.params._id;

    if (id) {
        try {
            const existingTodo = await Todo.findById(id);

            if (existingTodo) {
                await existingTodo.remove();
                res.send({ message: "successfully removed" });
            }
            else res.status(400).send({ message: "todo not found" })
        }
        catch (err) {
            res.status(500).send({ message: "error", error: err });
        }
    }
    else res.status(400).send({ message: "missing param id" })
}

todoController.put = async (req: Request, res: Response): Promise<void> => {
    if (req.body) {
        try {
            const existingTodo = await Todo.findById(req.body._id);
            if (existingTodo) {
                await Todo.findByIdAndUpdate(existingTodo, req.body);
                res.status(201).send({ message: "successfully updated" });
            }
            else res.status(400).send({ message: "todo not found" })
        }
        catch (err) {
            res.status(500).send({ message: "error", error: err });
        }

    }
    else res.status(400).send({ message: "missing todo" })
}

export default todoController;