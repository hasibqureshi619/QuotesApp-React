const express = require('express');
const mongoose = require('mongoose');
const app = express();
const seedDB = require('./seed')
const cors = require('cors')
const quoteRoutes = require('./apis/quoteRoutes')

mongoose.connect('mongodb://127.0.0.1:27017/Quote')
.then(()=>{console.log('DB Connected')})
.catch((err)=>{err})

app.use(express.urlencoded({extended: true}));  //for form data
app.use(express.json());  //for json data
app.use(cors({origin: ['http://localhost:3000']}));
app.use(quoteRoutes);
app.get('/hello',(req,res)=>{
    res.status(200).json({msg:"hello from QuotesApp"})
})


const port = process.env.PORT || 8080;
app.listen(port,()=>{
    console.log(`server connected at ${port}`)   
})