import express, { Request, Response } from 'express';
import todoRoutes from '../routes/todo.routes';
import bodyParser from 'body-parser';
import cors from 'cors';

class App {
    private instance:any;
    constructor() {
        this.instance = undefined;
    }
    start() {
        this.instance = express();

        this.instance.use(bodyParser.urlencoded({ extended: true }));
        this.instance.use(bodyParser.json());
        this.instance.use(cors());
        this.setPort();
        this.setRoutes();
    }
    setPort() {
        this.instance.listen(process.env.PORT);
    }
    setRoutes() {
        this.instance.use('/todo', todoRoutes);
    }
}


export default new App();