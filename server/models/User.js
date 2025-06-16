import mongoose from "mongoose";
const UserSchema = new mongoose.Schema({
    name : {
        type : String,
        required: true,

    },
      email : {
        type : String,
        required: true,
        unique : true,
    },  
      nam : {
        type : String,
        required: true,

    },
    img : {
        type : String,
        required: true,
        default :null,

    },  name : {
        type : String,
        required: true,

    },
})