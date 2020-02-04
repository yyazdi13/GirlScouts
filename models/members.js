//Creating the Members model
module.exports = function(sequelize, DataTypes) {
    var Members = sequelize.define("Members", {
      //foreign key in members table
      id: {
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true,
        allowNull: false,
      },
      fname: {
        type: DataTypes.STRING,
      allowNull: false,
      
      },
      lname: {
        type: DataTypes.STRING,
        allowNull: false,
            
      },
      role: {
        type: DataTypes.STRING,
        category: {
          type: DataTypes.ENUM,
          values: ["Trooper", "Leader", "Parent"],
        },
        allowNull: false,

      },
      childName: {
          type: DataTypes.STRING,
          allowNull: true,

    },
    //this is a foreign key to the users primary key
    //user_id: {
        //type: DataTypes.INTEGER,
       // required: true,
        //allowNull: false
   // }

    });
    return Members;
  };
  