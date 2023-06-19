import express from 'express';

import * as dotenv from 'dotenv'
dotenv.config()

import connectDB from './DB/connection.js';
import initApp from './src/app.router.js';

const app = express()
const PORT = process.env.PORT




initApp(app, express)
connectDB().then(()=>{
    app.listen(PORT, ()=>{
        console.log(`Server is running on port ${PORT}`);
    })
})