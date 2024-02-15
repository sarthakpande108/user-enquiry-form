const Sequelize = require("sequelize");
const config = require("../config");
const sequelize = new Sequelize(
  config.DB_DATABASE,
  config.DB_USERNAME,
  config.DB_PASSWORD,
  {
    host: config.DB_HOST,
    dialect: config.DB_DIALECT,
    dialectModule: require("mysql2"),
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

    db.user = require("./user")(sequelize, Sequelize);
    db.ExpertProfileReq = require("./ExpertProfileReq")(sequelize, Sequelize);
     db.companyInformation = require("./companyInformation")(sequelize, Sequelize);
     db.personInContact = require("./personInContact")(sequelize, Sequelize);
     db.ProjectDetails = require("./ProjectDetails")(sequelize, Sequelize)//;
     db.work_mode=require("./work_mode")(sequelize, Sequelize)


 db.user.hasOne(db.ExpertProfileReq, { foreignKey: "user_id", sourceKey: "id" });
 db.ExpertProfileReq.belongsTo(db.user, { foreignKey: "user_id" });
db.user.hasOne(db.ProjectDetails, { foreignKey: "user_id" });
db.ProjectDetails.belongsTo(db.user, { foreignKey: 'user_id' })
db.user.hasOne(db.companyInformation, { foreignKey: "user_id" });
 db.companyInformation.belongsTo(db.user, { foreignKey: "user_id" });


db.user.hasOne(db.personInContact, { foreignKey: "user_id" });
db.personInContact.belongsTo(db.user, { foreignKey: "user_id" })
db.user.hasOne(db.work_mode,{foreignKey:"user_id"});
db.work_mode.belongsTo(db.user, { foreignKey:"user_id"})
module.exports = db;
