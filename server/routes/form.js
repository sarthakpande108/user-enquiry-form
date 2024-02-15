const {Router}=require("express");
const router=Router()
const formController=require("../controllers/formControllers");

module.exports=()=>{
    router.get('/',formController.getForms);
    router.get('/:user_id',formController.getFormsbyId);
    //test route
    router.get('/test', (req, res) => {
        res.send('Test route works!');
    }); 

    //add
    router.post('/',formController.createForm);
    router.post("/addExpertProfileReq/:user_id",formController.addExpertProfileReq);
    router.post("/addcompanyInformation/:user_id",formController.addcompanyInformation);
    router.post("/addpersonalInContact/:user_id",formController.addpersonalInContact);
    router.post("/addprojectDetails/:user_id",formController.addprojectDetails);
    router.post("/addworkmode/:user_id",formController.addWorkMode);

    //update
     router.post("/:user_id/updateExpertProfileReq/:id",formController.updateExpertProfileReq);  
     router.post("/:user_id/updateProjectDetails/:id",formController.updateProjectDetails);
     router.post("/:user_id/updatecompanyInformation/:id",formController.updatecompanyInformation);
     router.post("/:user_id/updatepersonInContact/:id",formController.updatepersonInContact);
     router.post("/:user_id/updateworkmode/:id",formController.updateWorkMode);
     //delete
     router.post("/:user_id/deleteExpertProfileReq/:id",formController.deleteExpertProfileReq);  
     router.post("/:user_id/deleteProjectDetails/:id",formController.deleteProjectDetails);
     router.post("/:user_id/deletecompanyInformation/:id",formController.deletecompanyInformation);
     router.post("/:user_id/deletepersonInContact/:id",formController.deletepersonInContact);
return router;
    }