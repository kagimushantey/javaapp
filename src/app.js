const express = require('express');
const port = 8000;//creating a port
const app =express();//creating a variable to call instead of express
app.get("/", (req,res) => {//connecting to the server
res.status('200'),send ({//making it echo a response
    "message": "Welcome to server"
});
})
app.listen(port, () =>{//function to listen to connnection to the port
    console.log("listening tothe port" + port);
})