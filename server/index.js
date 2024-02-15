//const express=require("express");
const config=require("./config")
const port=config.PORT ||4000;
const http=require("http");
const app=require('./app');
const server=http.createServer(app)

server.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})