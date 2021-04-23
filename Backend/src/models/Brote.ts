import { Schema, model, Document, Types, Mongoose } from "mongoose";

const BroteSchema: Schema = new Schema({
  name: { type: String, required: true },
  description: { type: String },
  initialdate: { type: Date},
  finaldate: { type: Date},
});

export default model("Brote", BroteSchema);
