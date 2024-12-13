import mongoose from "mongoose";
const {Schema} = mongoose;

const updateModel = new Schema({
    text: { 
        type: String, 
        required: true 
    },
    createdAt: { 
        type: Date, 
        default: Date.now 
    },
})

export default mongoose.model('Updates', updateModel)