import mongoose from "mongoose";
const {Schema} = mongoose;

const TimeTableModel = new Schema({
    index: { 
        type: Number, 
        required: true 
    },
    path: { 
        type: String, 
        required:true 
    },
})

export default mongoose.model('TimeTable', TimeTableModel)