import mongoose from 'mongoose';

const TodoSchema = new mongoose.Schema({
    createdDate: { type : Date, default: Date.now },
    name: {type: String},
    completed: {type: Boolean}
});

export default mongoose.models.Todo || mongoose.model('Todo', TodoSchema);