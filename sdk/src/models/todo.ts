export default class Todo {
    private _id:string;
    private _name: string;
    private _completed : boolean;

    constructor(config: any) {
        if (config) {
            this._id = config.id;
            this._name = config.name;
            this._completed = config.completed;
        }
        else{
            this._id = '';
            this._name = '';
            this._completed = false;
        }
    }

    get name() {
        return this._name;
    }
    get completed () {
        return this._completed;
    }
}