const { connectdatabase } = require("./database/database");
connectdatabase()
//connecting to database
const express=require("express");
const app=express()
const moongoose=require('mongoose');
const Blog=require("./model/blogmodel")



//get

app.get("/",(req,res)=>{
    res.json({
        status:200,
        message:"hiii cutieee",
        ifff:true,
        khattam:"nai bhooo",
        launa:"uffss"
    })
})

app.post("/createBlog",async(req,res)=>{
  await  Blog.create({
        title:req.body.title,
        subTitle:req.body.subTitle,
        description:req.body.description
    })
})

app.listen(4000,()=>{
console.log("port at 4000");
console.log("Hello soltini");
console.log("oo k chaa");
})