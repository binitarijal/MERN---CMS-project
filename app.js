const app=require("express")();
const moongoose=require('mongoose');
const { connectdatabase } = require("./database/database");
connectdatabase()
//connecting to database


//get

app.get("/",(req,res)=>{
    res.json({
        status:200,
        message:"hiii cutieee",
        ifff:true,
        khattam:"nai bhooo"
    })
})

app.listen(4000,()=>{
console.log("port at 4000");
console.log("Hello soltini");
})