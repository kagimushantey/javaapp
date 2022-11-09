const mongoose = require('mongoose')
const schema = mongoose.Schema
const todoSchema = new schema({
    activity:{
        type:String,
        required:true
    }
})
const todo = mongoose.model("todoschema",todoSchema)
module.exports=todo