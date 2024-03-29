import { Router } from "express";
import asyncHandler from "express-async-handler";
import { Data, DataModel } from "../model/data.model";
import axios from "axios";

const router = Router();

router.post(
  "/save",
  asyncHandler(async (req, res) => {
    const { url,secretkey,commit,push,merge } = req.body;
    const newData:Data= {
        id: "",
        url,
        secretkey,
        commit,
        push,
        merge
      };
      const dbuser = await DataModel.create(newData);
      res.send(dbuser);
    
  })
);

router.post("/eventemulator",asyncHandler(async(req,res)=>{
  const{type,data}=req.body
  try{
    if(type.toLowerCase() === 'commit'){
      const filtereddata =await DataModel.find({commit:true})
      res.send("data filtered= "+filtereddata)
      filtereddata.forEach(element => {
        const{url,secretkey}=element
        axios.post(url,data,{
          headers:{
            'x-header':secretkey
          }
        })
      });
    }else if(type.toLowerCase() === 'push'){
      const filtereddata=await DataModel.find({push:true})
      res.send("data filtered= "+filtereddata)
      filtereddata.forEach(element =>{
        const {url,secretkey}=element
        axios.post(url,data,{
          headers:{
            'x-header':secretkey
          }
        })
      })
    }else if(type.toLowerCase() === 'merge'){
      const filtereddata=await DataModel.find({merge:true})
      res.send("data filtered= "+filtereddata)
      filtereddata.forEach(element =>{
        const {url,secretkey}=element
        axios.post(url,data,{
          headers:{
            'x-header':secretkey
          }
        })
      })
    }
  }catch(error){
    res.send(error);
  }
}))

export default router;


// try{
//   let filtereddata=[];
//   if(type.toLowerCase() === "commit"){
//     filtereddata=await DataModel.find()
//     res.send("sending ="+filtereddata)
//     if(filtereddata){
//       filtereddata.forEach(async element => {
//         const{url,secretkey}=element
//         await axios.post(url,data,{
//           headers:{
//             'x-secret':secretkey
//           }
//         })
//       });
//       res.send("event emulation successful")

//     }else{
//       res.send("not found filtered data")
//     }
    
//   }else{
//     res.send("invalid type")
//   }  
// }catch(error){
//   res.send(error)
// }
// }))