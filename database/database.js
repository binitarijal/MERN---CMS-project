const moongoose=require('mongoose')

exports.connectdatabase=(async()=>{
    await moongoose.connect("mongodb+srv://hello:hello@cluster0.dme40.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    .then(()=>{
        console.log("database connected successfully");
    })

})