import express from "express";
import { dbConnect } from "./config/database.config";
import webhookrouter from "./router/webhook.router";

import dotenv from 'dotenv';
import cors from "cors"

dotenv.config();
process.env.MONGODB_URI

dbConnect();

const app=express();
app.use(express.json())

app.use(cors({
   credentials:true,
   origin:"*"
}))

app.use("/api",webhookrouter)


const port=5000;
app.listen(port,()=>{
    console.log("website running on port "+port)
})


