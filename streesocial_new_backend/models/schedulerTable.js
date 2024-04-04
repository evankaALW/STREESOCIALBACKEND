const {DataTypes} = require("sequelize")
const seque = require('../config/db')
const screenTable = require('./screenTable')

const schedulerTable = seque.define('schedulerTable', {
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
    },
    screenID:{
        type:DataTypes.INTEGER,
    },
    startDate:{
        type:DataTypes.DATE,
    },
    slotIndex:{
        type:DataTypes.INTEGER,
    },
    videoLinks:{
        type:DataTypes.TEXT,
    },
    movieID:{
        type:DataTypes.INTEGER,
    },
    isDeleted:{
        type:DataTypes.BOOLEAN,
      }
},
{
  // options
  tableName: 'schedulerTable' // specify the exact table name
});

schedulerTable.belongsTo(screenTable,{ foreignKey: 'screenID' , onUpdate: 'NO ACTION',onDelete: 'CASCADE'});


seque.sync().then(() =>{
    console.log("schedulerTable table successfully created")
}).catch((error) =>{
    console.log("Error while creating schedulerTable", error)
});


module.exports = schedulerTable;
