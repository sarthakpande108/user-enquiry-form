module.exports=(sequlize,DataTypes)=>{
    const ProjectDetails=sequlize.define('ProjectDetails',{
        project_name:{
            type:DataTypes.STRING,
            isrequired:true
        },
        project_Discription:{
            type:DataTypes.TEXT,
            isrequired:true,

        },
        Scope_of_work:{
            type:DataTypes.TEXT,
            isrequired:true
        },
        project_Outcome:{
            type:DataTypes.TEXT,
            isrequired:true
        },
        project_cost:{
            type:DataTypes.TEXT,
            isrequired:true
        },
        
        project_timeline:{
            type:DataTypes.TEXT,
            isrequired:false
        },
        project_sector:{
            type:DataTypes.TEXT,
            allowNull:false
        },
        form_id:{
            type:DataTypes.STRING,
            isrequired:true
        }
    })
    return ProjectDetails
}