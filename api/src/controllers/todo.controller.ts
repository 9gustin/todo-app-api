import { Request, Response } from "express"

const todoController:any = {}

todoController.getAll = (req: Request, res:Response) : void => {
    res.send("buenardo!")
}

todoController.getOne = (req: Request, res:Response) : void => {
    res.send("buenardo!")
}

todoController.post = (req: Request, res:Response) : void => {
    res.send("buenardo!")
}

todoController.delete = (req: Request, res:Response) : void => {
    res.send("buenardo!")
}

todoController.put = (req: Request, res:Response) : void => {
    res.send("buenardo!")
}

export default todoController;