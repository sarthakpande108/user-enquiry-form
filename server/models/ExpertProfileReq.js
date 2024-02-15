module.exports = (sequelize, DataTypes) => {
    const ExpertProfileReq = sequelize.define('ExpertProfileReq', { // Use 'ExpertProfileReq' here
        edu_qualification: {
            type: DataTypes.STRING,
            allowNull: false // Change isrequired to allowNull
        },
        field_of_Study: {
            type: DataTypes.STRING,
            allowNull: false
        },
        min_experience: {
            type: DataTypes.STRING,
            allowNull: false
        },
        skills: {
            type: DataTypes.STRING,
            allowNull: false
        },
        tools_requirement: {
            type: DataTypes.TEXT,
            allowNull: false,
            
        },
        sector_of_expertise:{
           type:DataTypes.TEXT,
           allowNull : false,
        },
        Services_requirement:{
            type:DataTypes.TEXT,
            allowNull:false,
        },
        subject_matter_expertise:{
            type:DataTypes.TEXT,
            allowNull:true

        },
        user_id: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    return ExpertProfileReq;
};
