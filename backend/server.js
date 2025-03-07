import express from 'express';
import dotenv from  'dotenv';
import path from 'path';

import { connectDB } from './config/db.js';
import productRoutes from "./routes/productRoute.js"

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5001;


const __dirname = path.resolve();

app.use(express.json());

// app.get("/",(req,res)=>{
//     res.send('Server is  Running');
// })


app.use('/api/products',productRoutes)


if (process.env.NODE_ENV === 'production'){
    app.use(express.static(path.join(__dirname,"/frontend/dist")));
    app.get('*',(req,res)=>{
        res.sendFile(path.resolve(__dirname,"frontend","dist","index.html"))
    })
} 

app.listen(5001, () =>{
    connectDB();
    console.log("Server Started at http://localhost:"+PORT);
});


// 