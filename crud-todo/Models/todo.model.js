import mongoose, { model, Schema } from "mongoose";

const todoSchema = new Schema({
    text: { type: String, required: true },
    piority: { type: String, required: true }, // Fix typo: "piority" → "priority"
    deadline: { type: String, required: true },
});

// Ensure the model is created if it doesn't exist
export const todo = mongoose.models.Todo || new model("Todo", todoSchema);

// Check if the model is registered
// console.log("Registered Models:", mongoose.models);
