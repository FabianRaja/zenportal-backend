import mongoose from "mongoose";

//creating model schema for the database collection REQUIREMENTS
const requirements=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    website:{
        type:String,
        required:true,
    },
    role:{
        type:String,
        required:true,
    },
    ctc:{
        type:String,
        required:true,
    },
    nature:{
        type:String,
        required:true,
    },
    opening:{
        type:String,
        required:true,
    },
    deadline:{
        type:String,
        required:true,
    },
    program:{
        type:String,
        required:true,
    },
});

const requirement=mongoose.model("REQUIREMENTS",requirements);
export {requirement};