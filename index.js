const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const userRoutes = require('./routes/user')
const cors = require('cors')

mongoose.connect('mongodb+srv://demo:demo@demo.ozhf9.mongodb.net/project1?retryWrites=true&w=majority', 
{useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>{console.log("connected")}).catch((e)=>{console.log(e)})

app.use(cors())
app.use(bodyParser.json())

app.use('/api',userRoutes)

app.listen(5000,()=>{
    console.log("Server started...!")
})