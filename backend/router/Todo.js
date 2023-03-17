const express = require("express")
const router = express.Router()
require("../db/Database")
const Todo = require("../models/Todoschema")



router.post("/register",async(req,res)=>{
     console.log(req.body);
     const{name,mobile,email}= req.body
 // res.json({message:req.body})

    if(!name || !mobile || !email ){
        res.status(422).json("please filled the data");
    }

    try {
        
        const preuser = await Todo.findOne({email:email});
        console.log(preuser);

        if(preuser){
            res.status(422).json("this is user is already present");
        }else{
            const adduser = new Todo({
                name,mobile,email
            });

            await adduser.save();
            res.status(201).json(adduser);
            console.log(adduser);
        }

    } catch (error) {
        res.status(422).json(console.log(error));
    }
})

router.get("/getdata",async(req,res)=>{
    
    try {
        const userData = await Todo.find()
        res.status(201).json(userData);
        console.log(userData)
    } catch (error) {
        res.status(422).json(console.log(error));
    }
})

router.get("/getuser/:id",async(req,resp)=>{
    try {
        console.log(req.params)
        const {id}=req.params

        const userindividual = await Todo.findById({_id:id})
        console.log(userindividual)
        resp.status(201).json(userindividual)
    } catch (error) {
        resp.status(422).json(error)
    }
})

router.patch("/updateuser/:id",async(req,resp)=>{
    try{
        const {id}=req.params
        const val = req.body

        const updateData = await Todo.findByIdAndUpdate({_id:id},{$set:val})
        resp.status(201).json(updateData)
    }catch(error){
        resp.status(422).json(error)
    }
})

router.delete("/deletuser/:id",async(req,resp)=>{
    try{
        const {id} = req.params

        const deletTodo = await Todo.findByIdAndDelete({_id:id})

        resp.status(201).json(deletTodo)
    }catch(error){
        resp.status(422).json(error)
    }
})


module.exports =router

// router.post("/register", async(req,resp)=>{
//     const{name,mobile,email}= req.body
// console.log(name,mobile,email)
//     try {
//         if (!name|| !mobile || !email) {
//           return resp.status(422).json({ error: "please filled the value" });
//         }
    
//         const Data = await Todo.create({ name,mobile,email });
//     console.log(Data)
//         resp.status(201).json({
//           success: true,
//           message: "data created succesfully",
//           Data,
//         });
//       } catch (err) {
//         console.log(err);
//       }
// })