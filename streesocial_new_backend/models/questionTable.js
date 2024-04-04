const {DataTypes} = require("sequelize")
const seque = require('../config/db')

//														pady2	pady3	pady4	pady5	y1	y2	y3	y4	y5


const questionTable = seque.define('questionTable', {
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
    },
    questionDescription:{
        type:DataTypes.STRING,
       
    },
    optionOne:{
        type:DataTypes.STRING,
       
    },
    optionTwo:{
        type:DataTypes.STRING,
       
    },optionThree:{
        type:DataTypes.STRING,
       
    },optionFour:{
        type:DataTypes.STRING,
       
    },optionFive:{
        type:DataTypes.STRING,
       
    },
    imageURL:{
        type:DataTypes.TEXT,
    },
    font:{
        type:DataTypes.TEXT,
    },
    imageName:{
        type:DataTypes.STRING,
    },
    correctOption:{
        type:DataTypes.STRING,
    },
    padx1:{
        type:DataTypes.INTEGER,
    },
    padx2:{
        type:DataTypes.INTEGER,
    },
    padx3:{
        type:DataTypes.INTEGER,
      },
    padx4:{
        type:DataTypes.INTEGER,
    },
    padx5:{
        type:DataTypes.INTEGER,
      },
    x1:{
        type:DataTypes.INTEGER,
      },
      x2:{
        type:DataTypes.INTEGER,
      },
      x3:{
        type:DataTypes.INTEGER,
      },
      x4:{
        type:DataTypes.INTEGER,
      },
      x5:{
        type:DataTypes.INTEGER,
      },
    pady1:{
        type:DataTypes.INTEGER,
      },
    pady2:{
        type:DataTypes.INTEGER,
      },
      pady3:{
        type:DataTypes.INTEGER,
      },
      pady4:{
        type:DataTypes.INTEGER,
      },
      pady5:{
        type:DataTypes.INTEGER,
      },
      y1:{
        type:DataTypes.INTEGER,
      },
      y2:{
        type:DataTypes.INTEGER,
      },
      y3:{
        type:DataTypes.INTEGER,
      },
      y4:{
        type:DataTypes.INTEGER,
      },
      y5:{
        type:DataTypes.INTEGER,
      }
},
{
  tableName: 'questionTable' // specify the exact table name
});

seque.sync().then(() =>{
    console.log("questionTable table successfully created")
}).catch((error) =>{
    console.log("Error while creating questionTable", error)
});



module.exports=questionTable;