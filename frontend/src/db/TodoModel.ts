import mongoose, { Document, Schema } from "mongoose";

export interface IVault extends Document {
  user: string;
  todos: string[];
}

const TodoSchema: Schema = new Schema<IVault>({
  user: { unique: true, type: String },
  todos: [String],
});

const TodoModel = mongoose.models.todo || mongoose.model<IVault>("todo", TodoSchema);

export default TodoModel;
