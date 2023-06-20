import express from 'express';
import bodyParser from "body-parser";
import cors from "cors";


import * as dotenv from 'dotenv'
dotenv.config()
import connectDB from './DB/connection.js';
import initApp from './src/app.router.js';
const app = express()
const PORT = process.env.PORT;

app.use(cors())
app.use((_req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', '*');
  res.header("Access-Control-Allow-Methods", "POST, PUT, GET, OPTIONS, DELETE, PATCH")
  next();
});
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


initApp(app, express)
connectDB().then(()=>{
    app.listen(PORT, ()=>{
        console.log(`Server is running on port ${PORT}`);
    })
})