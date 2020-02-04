module.exports = function(sequelize, DataTypes){
    var News = sequelize.define("New", {
        newsDate: {
            type: DataTypes.DATEONLY
        },
        title: {
            type: DataTypes.STRING
        },
        newsDetail: {
            type: DataTypes.TEXT
        },
        author: {
            type: DataTypes.STRING
        }
    });
    
    return News;
}