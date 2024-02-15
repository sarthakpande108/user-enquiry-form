const express=require("express");
const cors=require("cors");
const db=require("./models");
const path=require('path');
const bodyParser = require("body-parser");
const routes=require("./routes");

const app=express();


app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}));
app.use(routes());

app.get('/',(req,res)=>{
  res.send("server is running")
})

db.sequelize.sync().then(()=>{
    console.log( "Model sync Successfully");
}).catch((err)=>{
  console.log("unable to sync model",err.message);
})


module.exports=app;