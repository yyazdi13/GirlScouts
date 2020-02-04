module.exports = function(sequelize, DataTypes){
    var Blog = sequelize.define("Blog", {
        chatComments: {
            type: DataTypes.TEXT
        }

    });
    return Blog;
}