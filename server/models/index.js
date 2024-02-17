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

     db.form = require("./form")(sequelize, Sequelize);
  db.ExpertProfileReq = require("./ExpertProfileReq")(sequelize, Sequelize);
 db.companyInformation = require("./companyInformation")(sequelize, Sequelize);
 db.personInContact = require("./personInContact")(sequelize, Sequelize);
 db.ProjectDetails = require("./ProjectDetails")(sequelize, Sequelize)//;
 db.work_mode=require("./work_mode")(sequelize, Sequelize)

 db.form.hasOne(db.ExpertProfileReq, { foreignKey: "form_id", sourceKey: "id" }); 
 db.ExpertProfileReq.belongsTo(db.form, { foreignKey: "form_id" });
 db.form.hasOne(db.ProjectDetails, { foreignKey: "form_id" });
 db.ProjectDetails.belongsTo(db.form, { foreignKey: 'form_id' })
  db.form.hasOne(db.companyInformation, { foreignKey: "form_id" });
 db.companyInformation.belongsTo(db.form, { foreignKey: "form_id" })

  db.form.hasOne(db.personInContact, { foreignKey: "form_id" });
  db.personInContact.belongsTo(db.form, { foreignKey: "form_id" })
  db.form.hasOne(db.work_mode,{foreignKey:"form_id"});
  db.work_mode.belongsTo(db.form, { foreignKey:"form_id"})
 module.exports = db;
