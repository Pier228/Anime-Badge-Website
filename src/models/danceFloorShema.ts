import { Schema, model, models } from "mongoose";

const character = new Schema({
    name: String,
    src: String
})

export default models.dance_floor || model('dance_floor', character);