const router=require("express").Router()

module.exports=()=>{
    router.use("/form",require("./form")());
    return router;
}