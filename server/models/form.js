module.exports=(sequelize,Datatypes)=>{
    const form=sequelize.define("form",{
        name:{
            type:Datatypes.STRING,
            isrequired:true
        },
        sector:{
            type:Datatypes.STRING,
            isrequired:true
        }
    })
    return form;
}