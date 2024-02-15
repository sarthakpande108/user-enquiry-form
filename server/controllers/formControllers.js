const { buildResponse } = require("../helpers/helpers");
const formService = require("../services/formServices");

exports.createForm = async (req, res) => {
  try {
    const dataToSend = req.body;
    const data = await formService.createForm(dataToSend);
    buildResponse(res, 200, {
      error: false,
      message: "form created Successfully",
      data: data,
    });
  } catch (error) {
    buildResponse(res, 500, {
      error: true,
      message: "Internal Server Error:" + error.message,
      data: "",
    });
  }
};

exports.getFormsbyId = async (req, res) => {
  try {
    const { user_id } = req.params;
    const data = await formService.getFormsbyId(user_id);
    if (data != false) {
      buildResponse(res, 200, {
        error: false,
        message: "from found! ",
        data: data,
      });
    }else{
        buildResponse(res, 200, {
            error: true,
            message: "from not found! ",
            data: "",
          })

    }
  } catch (error) {
    buildResponse(res, 500, {
        error: true,
        message: "Internal Server error"+error.message,
        data:"",
      })
  }
};


exports.getForms = async (req, res) => {
    try {
      const data = await formService.getForms();
      if (data != false) {
        buildResponse(res, 200, {
          error: false,
          message: "form found!",
          data: data,
        });
      } else {
        buildResponse(res, 404, {
          error: true,
          message: "Not Found",
          data: "",
        });
      }
    } catch (error) {
      buildResponse(res, 500, {
        error: true,
        message: "Internal Server Error: " + error.message,
        data: null,
      });
    }
  };
  

//to create form components

exports.addprojectDetails=async(req,res)=>{
      try{
        const dataToSend=req.body;
        const {user_id}=req.params;
        dataToSend.user_id=user_id;

        const data=await formService.addProjectDetails(dataToSend);
        if (data != false) {
            buildResponse(res, 200,
                {
                    error: false,
                    message: "project details added successfully! ",
                    data: data
                })
        } else {
            buildResponse(res, 200,
                {
                    error: true,
                    message: "project details updated successfully!",
                    data: ''
                })
        }
      }catch(error){
        buildResponse(res, 500,
            {
                error: true,
                message: "Internal Server Error"+error.message,
                data: ''
            })
      }
}


exports.addpersonalInContact=async(req,res)=>{
    try{
        const dataToSend=req.body;
        const {user_id}=req.params;
        dataToSend.user_id=user_id;

       const data=await formService.addPersonInContact(dataToSend);
       if (data != false) {
        buildResponse(res, 200,
            {
                error: false,
                message: "personal contact  added successfully! ",
                data: data
            })
    } else {
        buildResponse(res, 200,
            {
                error: true,
                message: "personal contact Updated successfully!",
                data: ''
            })
    }

    }catch(error){
        buildResponse(res, 200,
            {
                error: true,
                message:"Internal Server Error"+error.message,
                data: ''
            })
    }
}

exports.addExpertProfileReq=async(req,res)=>{
    try{
        const dataToSend=req.body;
        const {user_id}=req.params;
        dataToSend.user_id=user_id;
        if (dataToSend.tools_requirement) {
            dataToSend.tools_requirement = JSON.stringify(dataToSend.tools_requirement);
        }

        const data= await formService.addExpertProfileReq(dataToSend);
        if(data!=false){
            buildResponse(res,200,{
                error:false,
                message:"expert profile requiremens added successfully",
                data:data
            })
        }
        
    }catch(error){
        buildResponse(
            res,500,{
                error:true,
                message:"internal server error:"+error.message,
                data:""
            }
        )
    }
}


exports.addcompanyInformation=async(req,res)=>{
    try{
        const dataToSend=req.body;
        const {user_id}=req.params;
        dataToSend.user_id=user_id;

        const data= await formService.addCompanyInformation(dataToSend);
        if(data!=false){
            buildResponse(res,200,{
                error:false,
                message:"company information added successfully",
                data:data
            })
        }else{
            buildResponse(res,200,{
                error:true,
                message:"unable to add ",
                data:""
            })
        }
    }catch(error){
        buildResponse(
            res,500,{
                error:true,
                message:"internal server error:"+error.message,
                data:""
            }
        )
    }
}


exports.addWorkMode=async(req,res)=>{
    try{
        const dataToSend=req.body;
        const {user_id}=req.params;
        dataToSend.user_id=user_id;

        const data= await formService.addWorkMode(dataToSend);
        if(data!=false){
            buildResponse(res,200,{
                error:false,
                message:"work mode added successfully",
                data:data
            })
        }else{
            buildResponse(res,200,{
                error:true,
                message:"unable to add ",
                data:""
            })
        }
    }catch(error){
        buildResponse(
            res,500,{
                error:true,
                message:"internal server error:"+error.message,
                data:""
            }
        )
    }
}

//delete

exports.deleteProjectDetails=async(req,res)=>{
    try{
        const {user_id,id}=req.params;
        const dataToSend={
            user_id:user_id,
            id:id 
        }
        const data=await formService.deleteProjectDetails(dataToSend);

        if(data!=false){
            buildResponse(res,200,{
                error:false,
                message:"project details deleted successfully",
                data:data
            })
        }else{
            buildResponse(res,200,{
                error:true,
                message:"unable to delete data",
                data:""
            })
        }

    }catch(error){
        buildResponse(res,500,{
            error:true,
            message:"internal server error:"+error.message,
            data:""
        })
    }

}
exports.deletecompanyInformation=async(req,res)=>{
    try{
        const {user_id,id}=req.params;
        const dataToSend={
            user_id:user_id,
            id:id 
        }
        const data=await formService.deleteCompanyInformation(dataToSend);

        if(data!=false){
            buildResponse(res,200,{
                error:false,
                message:"company infomation deleted successfully",
                data:data
            })
        }else{
            buildResponse(res,200,{
                error:true,
                message:"unable to delete data",
                data:""
            })
        }

    }catch(error){
        buildResponse(res,500,{
            error:true,
            message:"internal server error:"+error.message,
            data:""
        })
    }

}
exports.deleteExpertProfileReq=async(req,res)=>{
    try{
        const {user_id,id}=req.params;
        const dataToSend={
            user_id:user_id,
            id:id 
        }
        const data=await formService.deleteExpertProfileReq(dataToSend);

        if(data!=false){
            buildResponse(res,200,{
                error:false,
                message:"expert profile  requirment deleted successfully",
                data:data
            })
        }else{
            buildResponse(res,200,{
                error:true,
                message:"unable to delete data",
                data:""
            })
        }

    }catch(error){
        buildResponse(res,500,{
            error:true,
            message:"internal server error:"+error.message,
            data:""
        })
    }

}
exports.deletepersonInContact=async(req,res)=>{
    try{

        const {user_id,id}=req.params;
        const dataToSend={
            user_id:user_id,
            id:id 
        }
        const data=await formService.deletepersonInContact(dataToSend);

        if(data!=false){
            buildResponse(res,200,{
                error:false,
                message:"person in contact deleted successfully",
                data:data
            })
        }else{
            buildResponse(res,200,{
                error:true,
                message:"unable to delete data",
                data:""
            })
        }
    }catch(error){
        buildResponse(res,500,{
            error:true,
            message:"internal server error:"+error.message,
            data:""
        })
    }

}

//update

exports.updateProjectDetails=async(req,res)=>{
try{
    const { user_id, id } = req.params;        
        const Data = req.body;
        const dataToSend = {
            data: Data,
            user_id:user_id,
            id: id
        }
        const data = await formService.updateProjectDetails(dataToSend);
        if (data != false) {
            buildResponse(res, 200,
                {
                    error: false,
                    message: "project details updated successfully! ",
                    data: data
                })
        } else {
            buildResponse(res, 200,
                {
                    error: true,
                    message: "Unable to update project details",
                    data: ''
                })
        }
}
catch(error){
    buildResponse(res,500,{
        error:true,
        message:"internal  server error:"+error.message,
        data:""
    })
}
}

exports.updatecompanyInformation=async(req,res)=>{
    try{
        const { user_id, id } = req.params;        
        const Data = req.body;

        const dataToSend = {
            data: Data,
            user_id:user_id,
            id: id
        }
        const data = await formService.updateCompanyInformation(dataToSend);

        if (data != false) {
            buildResponse(res, 200,
                {
                    error: false,
                    message: "company information updated successfully! ",
                    data: data
                })
        } else {
            buildResponse(res, 200,
                {
                    error: true,
                    message: "Unable to update company information!",
                    data: ''
                })
        }
    }
    catch(error){
        buildResponse(res,500,{
            error:true,
            message:"internal  server error:"+error.message,
            data:""
        })
    }
    }
    exports.updateExpertProfileReq=async(req,res)=>{
        try{
            const {user_id,id}=req.params;
            const Data=req.body;
            const dataToSend={
                data:Data,
                user_id : user_id,
                id:id
            }
            const data=await formService.updateExpertProfileReq(dataToSend);
            if(data!=false){
                buildResponse(res,200,{
                    error:false,
                    message:"expert profile request updated successfully",
                    data:data
                })
            }else{
                buildResponse(res,200,{
                    error: true,
                    message: "Unable to  update expert profile request!",
                    data: ''
                }
                    )
            }
        }
        catch(error){
            buildResponse(res,500,{
                error:true,
                message:"internal  server error:"+error.message,
                data:""
            })
        }
        }


        exports.updatepersonInContact=async(req,res)=>{
            try{
                const {user_id,id}=req.params;
                const Data=req.body;
                
            const dataToSend={
                data:Data,
                user_id:user_id,
                id:id
            }
            const data=await formService.updatePersonInContact(dataToSend);

            if(data!=false){
                buildResponse(res,200,{
                    error: false,
                    message:"person in contact updated successfully",
                    data:data
                })
            }else{
                buildResponse(
                    res,200,{
                        error:true,
                        message:"unable to update!",
                        data:""
                    })
            }}
            catch(error){
                buildResponse(res,500,{
                    error:true,
                    message:"internal  server error:"+error.message,
                    data:""
                })
            }}


            exports.updateWorkMode=async(req,res)=>{
                try{
                    const {user_id,id}=req.params;
                    const Data=req.body;
                    
                const dataToSend={
                    data:Data,
                    user_id:user_id,
                    id:id
                }
                const data=await formService.updateWorkMode(dataToSend);
    
                if(data!=false){
                    buildResponse(res,200,{
                        error: false,
                        message:"work mode updated successfully",
                        data:data
                    })
                }else{
                    buildResponse(
                        res,200,{
                            error:true,
                            message:"unable to update!",
                            data:""
                        })
                }}
                catch(error){
                    buildResponse(res,500,{
                        error:true,
                        message:"internal  server error:"+error.message,
                        data:""
                    })
                }}