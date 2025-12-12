import { model, Schema } from "mongoose";

const rappelSchema = new Schema({
    userId: {
        type: String
    },
    text: {
        type: String
    },
    date: {
        type: Date,
        required: true
    },
    frequency: {
        type: Number
    }
});

export const RappelModel = model("rappel", rappelSchema);