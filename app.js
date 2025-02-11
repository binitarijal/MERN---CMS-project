const app=require("express")();

//get

app.get("/",(req,res)=>{
    res.json({
        status:200,
        message:"hiii cutieee",
        ifff:true
    })
})

app.listen(4000,()=>{
console.log("port at 4000")
})