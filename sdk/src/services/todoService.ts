import Todo from "../models/todo";
import axios from 'axios';

let todoService:any = {};
const controllerRoute = "todo";

todoService.getAll = async () : Promise<Todo[]> => {
    let response = await axios.get(`${process.env.API_URL}/${controllerRoute}`);

    let todos:Todo[] = [];
    
    if(response.status === 200){
        console.log(response.data);
        todos = [];

    }

    return todos;
}

todoService.post = async (note:Todo) : Promise<Todo> => {
    
}

todoService.put = async (note:Todo) : Promise<Todo> => {
    
}

todoService.delete = async (note:Todo) : Promise<Todo> => {
    
}

export default todoService;