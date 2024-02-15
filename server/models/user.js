module.exports=(sequelize,Datatypes)=>{
    const user=sequelize.define("user",{
        name:{
            type:Datatypes.STRING,
            isrequired:true
        },
        sector:{
            type:Datatypes.STRING,
            isrequired:true
        }
    })
    return user;
}