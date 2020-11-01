import express, { Request, Response } from 'express';
import todoRoutes from '../routes/todo.routes';
import bodyParser from 'body-parser';

class App {
    private instance:any;
    constructor() {
        this.instance = undefined;
    }
    start() {
        this.instance = express();
        this.instance.use(bodyParser.json()); // for parsing application/json
        this.instance.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
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