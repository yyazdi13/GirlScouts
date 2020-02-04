//Require bcryptjs for password hashing
var bcrypt = require("bcryptjs");

//Creating the user model
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    // The password cannot be null
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    username: {
      type:DataTypes.STRING,
      allowNull: false,
    }
  });

  //Check for unhashed passwords and compare to hashed password stored in the database
  User.prototype.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
  },
    //create a hook, before use is created the password is automatically hashed
    User.addHook("beforeCreate", function(user) {
      user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
    });
    return User;
};
