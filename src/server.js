const mongoose = require('mongoose')
//helps connect node js to mongo db
const express = require('express')
//framework for creating restful API
const app=express()
const port= 8000;
const router=require('./router/routes')
const uri="mongodb+srv://shantey:E3oebQoM5BXhVqAU@codequeen7.7ylgyns.mongodb.net/?retryWrites=true&w=majority";

app.use('/api',router)
mongoose.connect(uri, ()=>{
app.listen (port,() =>{
    console.log(`server is now running ${port}`)
})
}).catch(error=>console.log(error))

