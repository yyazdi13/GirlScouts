module.exports = function(sequelize, DataTypes){
    var Member = sequelize.define("Member", {
        first_name: {
          type: DataTypes.STRING,
          allowNull: false
        },
        last_name: {
          type: DataTypes.STRING,
          allowNull: false

        },
       category: {
            type: DataTypes.STRING,
            allowNull: false,
            isIn: {
                args: [['trooper', 'parent', 'leader']],
                msg: 'category'

            }
       },
       childName: {
           type: DataTypes.STRING
       }
      });
      Member.associate = function(models){
        Member.hasMany(models.Calendar_item, {
            OnDelete: "cascade"
        });
        Member.hasMany(models.Blog, {
            OnDelete: "cascade"
        });
    }
      return Member;
}