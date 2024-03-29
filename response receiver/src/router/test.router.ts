import { Router } from "express";
import asyncHandler from "express-async-handler";

const router=Router();

const messages: any[]=[];

const outputmes:any[]=[];

router.post("/message",asyncHandler(async(req,res)=>{
    const result=req.body
    console.log(req.header)
    messages.push(result);
    res.send("webhook data recieved")
}))

router.get("/message",(req,res)=>{
    return res.json(messages);
})

router.post("/insert",asyncHandler(async(req,res)=>{
    const result=req.body
    outputmes.push(result)
    res.send("webhook data recieved")
}))

router.get("/insert",(req,res)=>{
    return res.json(outputmes)
})

export default router;