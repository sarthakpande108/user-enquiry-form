module.exports=(sequelize,DataTypes)=>{
    const companyInformation=sequelize.define('companyinformation',{
      name:{
        type:DataTypes.STRING,
        isrequired:true
      },
      domain:{
        type:DataTypes.STRING,
        isrequired:true,
      },
      location:{
        type:DataTypes.STRING,
        isrequired:true
      },
      url:{
        type:DataTypes.STRING,
        isrequired:true
      },
        user_id:{
            type:DataTypes.STRING,
            isrequired:true
        }
    })
    return companyInformation;
}