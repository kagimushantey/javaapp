const express = require('express')
const todoSchema = require('../models/todoschema')
const router = express.Router();
router.post("/todos",async(req,res) => {
    console.log("posting data")
})



module.exports= router;