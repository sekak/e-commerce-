const express = require('express') 
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');
const Auth  = require('./router/auth')
const Users  = require('./router/user')
const useProducts  = require('./router/products')
const User  = require('./router/user')

const app = express(); 
dotenv.config()
app.use(cors())
app.use(express.json())

mongoose.connect(process.env.MONGO_URL).then(console.log("connected to mongodb")).catch(err=>console.log(err))
 
 

app.use("/", useProducts)
app.use("/",Auth);
app.use("/",User);

app.listen(4000,()=>{
    console.log("server is running");
}) 