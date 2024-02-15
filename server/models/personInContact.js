module.exports=(sequelize,DataTypes)=>{
    const personInContact=sequelize.define('personInContact',{
        name:{
            type:DataTypes.STRING,
            isrequired:true
        },
        contact_no:{
            type:DataTypes.STRING,
            isrequired:true
        },
        email:{
            type:DataTypes.STRING,
            isrequired:true
        },
        user_id:{
            type:DataTypes.STRING,
            isrequired:true
        }
    })

    return personInContact;
}