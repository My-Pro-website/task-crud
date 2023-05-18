const express=require("express");
const app=express();
app.use(express.json())
const cors = require("cors");
const route=require('./userRoute/route');

app.use(cors())
app.use("/api",route);





app.listen(5000,()=>{
    console.log("Port running on 5000");
})