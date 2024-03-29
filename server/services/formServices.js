const db=require("../models");
const Form=db.form;
const ProjectDetails=db.ProjectDetails;
const ExpertProfileReq=db.ExpertProfileReq;
const personInContact=db.personInContact;
const companyInformation=db.companyInformation;
const workMode=db.work_mode;

// creating form
exports.createForm=async(data)=>{
try{
    const dataToSend = await Form.create(data);
    return dataToSend;
}catch(error){
    throw new Error("error adding form",error.message);
}}
//getting all forms in allforms section
exports.getForms=async()=>{
    try{
        const data=await Form.findAll({
            include:[
                ProjectDetails,
                ExpertProfileReq,
                personInContact,
                companyInformation,
                workMode
            ]
        });
        if (!data) return false;
        return(data)
    }
    catch(error) {
        throw new Error("Error getting form" + error.message);
}};

// getting form by ids for indivisual access
exports.getFormsbyId=async (form_id)=>{
try{
    const data=await Form.findOne({
        include:[
            ProjectDetails,
            ExpertProfileReq,
            personInContact,
            companyInformation,
            workMode
        ],
        where:{
            id:form_id,
        }
    })
    if (!data) return false;
    return data;
}
catch(error){
    throw new Error("error getting form",err.message);
}};

//adding company information
exports.addCompanyInformation=async(data)=>{
    try{
        const findExisting = await companyInformation.findOne({
            where: {
              form_id: data.form_id,
            },
          });
          if(findExisting){
            await companyInformation.update(data, {
                where: {
                  form_id: data.form_id,
                },
              })
              return false;
          }
        
        const dataToReturn = await companyInformation.create(data);
        return dataToReturn;
    }catch(error){
        console.log('error adding company infromation',error.message)
    }
}
//adding person in contact with user
exports.addPersonInContact=async(data)=>{
    try{

        const findExisting = await personInContact.findOne({
            where: {
              form_id: data.form_id,
            },
          });
          if(findExisting){
            await personInContact.update(data, {
                where: {
                  form_id: data.form_id,
                },
              })
              return false;
          }
        
        const dataToReturn=await personInContact.create(data);
        return dataToReturn

    }catch(error){
        console.log("error in adding expert",error.message)
    }
}
//adding project details
exports.addProjectDetails=async(data)=>{
    try{
        const findExisting = await ProjectDetails.findOne({
            where: {
              form_id: data.form_id,
            },
          });
          if(findExisting){
            await ProjectDetails.update(data, {
                where: {
                  form_id: data.form_id,
                },
              })
              return false;
          }
        const dataToReturn=await ProjectDetails.create(data);
        return dataToReturn

    }catch(error){
        console.log("Error in adding Project Details",error.message)
    }
}
//adding expert profile requirments
exports.addExpertProfileReq=async(data)=>{
    try{
        const findExisting = await ExpertProfileReq.findOne({
            where: {
              form_id: data.form_id,
            },
          });
          if (findExisting) {
            await ExpertProfileReq.update(data, {
              where: {
                form_id: data.form_id,
              },
            })
            return false;
        }
        const dataToReturn=await ExpertProfileReq.create(data);
        return dataToReturn
    }catch(error){
        console.log("Error in Adding Expert Profie requirements ",error.message)
    }
}


exports.addWorkMode=async(data)=>{
    try{
        const findExisting = await workMode.findOne({
            where: {
              form_id: data.form_id,
            },
          });
          if (findExisting) {
            await workMode.update(data, {
              where: {
                form_id: data.form_id,
              },
            })
            return false;
        }
        const dataToReturn=await workMode.create(data);
        return dataToReturn
    }catch(error){
        console.log("Error in Adding work mode ",error.message)
    }
}




//delete



//updating
exports.updateCompanyInformation=async(data)=>{
    try{
        const findExisingdata=await companyInformation.findOne({
            where:{
                form_id:data.form_id,
                id:data.id
            }
        })
      if(findExisingdata){
        await companyInformation.update(data.data,{
            where:{
                form_id:data.form_id,
                id:data.id
            }
        })
        return true;
      }
      return false;
    }catch(error){
        console.log("error in updating the company information")
    }
}

exports.updateExpertProfileReq=async(data)=>{
    try{
        const findExisingdata=await ExpertProfileReq.findOne({
            where:{
                form_id:data.form_id,
                id:data.id
            }
        })
      if(findExisingdata){
        await ExpertProfileReq.update(data.data,{
            where:{
                form_id:data.form_id,
                id:data.id
            }
        })
        return true;
      }
       return false;
    }catch(error){
        console.log("error in updating the expert profile requirements")
    }
}

exports.updatePersonInContact=async(data)=>{
    try{
        const findExisingdata=await personInContact.findOne({
            where:{
                form_id:data.form_id,
                id:data.id
            }
        })
      if(findExisingdata){
        await personInContact.update(data.data,{
            where:{
                form_id:data.form_id,
                id:data.id
            }
        })
        return true;
      }
      return false;
    }catch(error){
        console.log("error in updating the person in contact")
    }
}


exports.updateProjectDetails=async(data)=>{
    try{
        const findExisingdata=await ProjectDetails.findOne({
            where:{
                form_id:data.form_id,
                id:data.id
            }
        })
      if(findExisingdata){
        await ProjectDetails.update(data.data,{
            where:{
                form_id:data.form_id,
                id:data.id
            }
        })
        return true;
      }
       return false;
    }catch(error){
        console.log("error in updaing the project details")
    }
}


exports.updateWorkMode=async(data)=>{
    try{
        const findExisingdata=await workMode.findOne({
            where:{
                form_id:data.form_id,
                id:data.id
            }
        })
      if(findExisingdata){
        await workMode.update(data.data,{
            where:{
                form_id:data.form_id,
                id:data.id
            }
        })
        return true;
      }
       return false;
    }catch(error){
        console.log("error in updaing the work mode")
    }
}





