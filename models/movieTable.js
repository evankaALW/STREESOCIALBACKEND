const {DataTypes} = require("sequelize")
const seque = require('../config/db')

//											
const movieTable = seque.define('movieTable', {
    movieID:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
    },
    movieName:{
        type:DataTypes.STRING,
    },
    movieDesc:{
        type:DataTypes.STRING,
    },
    movieRuntime:{
        type:DataTypes.DOUBLE,
    },
    intervalTime:{
        type:DataTypes.DOUBLE,
    },
    productionHouse:{
        type:DataTypes.STRING,
    },
    dateTime:{
        type:DataTypes.DATE,
    },
    startDate:{
        type: DataTypes.DATE,
    },
    endDate:{
        type: DataTypes.DATE,
    },
    posterImage:{
        type:DataTypes.BLOB,
    },
    isDeleted:{
        type:DataTypes.BOOLEAN,
      },
      isExpired:{
        type:DataTypes.BOOLEAN,
      }
},
{
  // options
  tableName: 'movieTable' // specify the exact table name
});

seque.sync().then(() =>{
    console.log("movieTable table successfully created")
}).catch((error) =>{
    console.log("Error while creating movieTable", error)
});


module.exports = movieTable;
