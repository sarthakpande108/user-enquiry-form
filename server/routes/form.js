const {Router}=require("express");
const router=Router()
const formController=require("../controllers/formControllers");

module.exports=()=>{
    router.get('/',formController.getForms);
    router.get('/:form_id',formController.getFormsbyId);
    //test route
    router.get('/test', (req, res) => {
        res.send('Test route works!');
    }); 

    //add
    router.post('/',formController.createForm);
    router.post("/addExpertProfileReq/:form_id",formController.addExpertProfileReq);
    router.post("/addcompanyInformation/:form_id",formController.addcompanyInformation);
    router.post("/addpersonalInContact/:form_id",formController.addpersonalInContact);
    router.post("/addprojectDetails/:form_id",formController.addprojectDetails);
    router.post("/addworkmode/:form_id",formController.addWorkMode);

    //update
     router.post("/:form_id/updateExpertProfileReq/:id",formController.updateExpertProfileReq);  
     router.post("/:form_id/updateProjectDetails/:id",formController.updateProjectDetails);
     router.post("/:form_id/updatecompanyInformation/:id",formController.updatecompanyInformation);
     router.post("/:form_id/updatepersonInContact/:id",formController.updatepersonInContact);
     router.post("/:form_id/updateworkmode/:id",formController.updateWorkMode);
     //delete
    
return router;
    }