const express=require("express");
const router= new express.Router();
const Student=require("../models/students");

router.get("/Abhi",(req,res)=>{
    res.send("hello form abhi route hi!");
})

router.post("/students",async (req,res)=>{
    try{  const  user= new Student(req.body);
       const createuser = await user.save();
       res.status(201).send(createuser)
      }
      catch(e){
       res.status(400).send(e)
      }
  })
  //get all students form api using router not app
  router.get("/students", async (req,res)=>{
    try{
   const data = await Student.find();
   res.send(data);
    }catch(e){
        res.send(e);
    }
})
//get particular  students data from api
router.get("/students/:name", async (req,res)=>{
    try{
        const _name=req.params.name;
        const data= await Student.find({name:_name}).select({name:1,email:1})
        console.log(data);
     if(!data){
        return res.status(404).send();
     }else{
        res.status(500).send(data);
     }
         
    }catch(e){
        res.send(e);
    }
})
//update student by id for particular student
router.patch("/students/:id", async (req,res)=>{
    try{
 const _id= req.params.id;
const updatestd=await Student.findByIdAndUpdate(_id,req.body,{new:true})
res.send(updatestd);
    }
    catch(e){
         res.status(404).send(e);
    }
})
//delete student by its id
router.delete("/students/:id",async(req,res)=>{
    try{

        const delstudent= await Student.findByIdAndDelete(req.params.id);
        if(!req.params.id){
        res.status(400).send();
        }
         res.send(delstudent)
    }
    catch(e){
        console.status(500).send(err);
    }
})
module.exports= router;