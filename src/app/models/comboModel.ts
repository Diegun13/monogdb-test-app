import mongoose, { Schema } from "mongoose";

const comboSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    moveList: {
        type: String,
        required: true,
    },
    isTrue: {
        type: Boolean
    }
})

const comboModel = mongoose.models.comboModel || mongoose.model("comboModel", comboSchema)

export default comboModel
