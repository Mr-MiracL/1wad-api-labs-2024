import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const TaskSchema = new Schema({
  title: { type: String, required: true },
  description:  String ,
  deadline: Date,
    done: Boolean,
    riority: { type: String, enum: ["Low", "Medium", "High"], required: true },
    updated_at: Date
});
const dateValidator = (date) => {
    return date > new Date();
  }
  TaskSchema.path("deadline").validate(dateValidator);
  
export default mongoose.model('Task', TaskSchema);
