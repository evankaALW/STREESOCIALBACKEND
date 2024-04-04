const {DataTypes} = require("sequelize")
const seque = require('../config/db')
const brandTable = require('./brandTable')

const activityCashbackTable = seque.define('activityCashbackTable', {
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
    },
    activityDetails:{
        type:DataTypes.TEXT,
    },
    categoryDetails:{
        type:DataTypes.TEXT,
    },
    cashBackImagesURL:{
        type:DataTypes.JSON,
    },
    cashbackAmount:{
        type:DataTypes.DOUBLE,
    },
    dateTime:{
        type:DataTypes.DATE,
    },
    activityType:{
        type:DataTypes.STRING,
    },
    categoryType:{
        type:DataTypes.STRING,
    },
    brandID: {
        type: DataTypes.INTEGER,
        references: {
          model: brandTable, // Name of the table
          key: brandTable.id // Primary key in the referenced table
        },
        onUpdate: 'NO ACTION',
        onDelete: 'CASCADE'
      }
},
{
  // options
  tableName: 'activityCashbackTable' // specify the exact table name
});

activityCashbackTable.belongsTo(brandTable,  { foreignKey: 'brandID' });

seque.sync().then(() =>{
    console.log("activityCashbackTable table successfully created")
}).catch((error) =>{
    console.log("Error while creating activityCashbackTable", error)
});


module.exports = activityCashbackTable;
