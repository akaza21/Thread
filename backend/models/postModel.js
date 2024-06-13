import mongoose from "mongoose";

const postSchema = mongoose.Schema({
    postedBy:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'User',
        required: true
    },
    text:{
        
    },
})