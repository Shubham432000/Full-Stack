const mongoose = require("mongoose")

const todoSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    mobile:{
        type:Number,
        required:true
    },
    email:{
        type:String,
        required:true
    }
})

const Todo = mongoose.model("members",todoSchema)
module.exports = Todo