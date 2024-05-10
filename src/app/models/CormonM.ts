import mongoose , { Schema } from "mongoose";

const CormonSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    isTrue: {
        type: Boolean
    },
    img: {
        type: String,
        required: true,
    }
})

const CormonM = mongoose.models.Cormon || mongoose.model("Cormon", CormonSchema)
export default CormonM