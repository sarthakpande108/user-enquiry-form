module.exports=(sequelize,DataTypes)=>{
    const work_mode=sequelize.define("work_mode",{
        work_mode:{
            type:DataTypes.STRING,
            allowNull:false
        },
        form_id:{
            type:DataTypes.STRING,
            isrequired:true
        }
    })
    return work_mode;
}