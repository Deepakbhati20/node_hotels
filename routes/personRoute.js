const express = require("express");
const router = express.Router();
const person = require("./../models/person");

router.post("/",async(req,res)=>{

   try {

        const data = req.body;
        const newPerson = new person(data);
        const response = await newPerson.save();
        console.log("data saved successfully");
        res.status(200).json(response);
    
   } catch (error) {
         console.log("error: ",error);
         res.status(500).json({error: 'internal error'});
   } 
    
    
});

router.get("/",async(req,res)=>{
   const data = await person.find();
   console.log(data);
   res.status(200).json(data);
});

router.get("/:work",async(req,res)=>{
    const {work} = req.params;
    console.log(work);
    try{
     const data = await person.find({work});
     res.send(data);
    }
    catch(error){
       res.send(error);
    }
   
});

router.put("/:id",async(req,res)=>{
   try{
      const {id} = req.params;
      const updateddata = req.body;
      console.log(updateddata);
      const p = await person.findByIdAndUpdate(id,updateddata);
      res.send(p);
   }
   catch(error){
      res.send(error);
   }
});

router.delete("/:id",async(req,res)=>{
   try{
      const {id} = req.params;
      const p = await person.findByIdAndDelete(id);
      res.send(p);
   }
   catch(error){
      res.send(error);
   }
});
// comment for testing purpose
module.exports = router;