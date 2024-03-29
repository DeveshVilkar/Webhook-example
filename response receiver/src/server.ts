import express from "express";
import testrouter from "./router/test.router";

const app=express();
app.use(express.json());


app.use("/webhook",testrouter)

const port =5601;
app.listen(port,()=>{
    console.log("connection running on "+port)
})