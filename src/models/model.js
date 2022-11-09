const mongoose = require('mongoose')
const schema=mongoose.schema
const todoSchema = new schema({
    firstname:{
        type:String,
        required:true
    },
    lastname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    }
})
const Todo = mongoose.model("model", todoSchema)//fetching the model under file model ,get todoSchema
module.exports = Todo;//export the scheme
//nodemon is a tool that helps develop Node. js based applications by automatically restarting the node application when file changes in the directory are detected.