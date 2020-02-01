module.exports = function(sequelize, DataTypes){
    var News = sequelize.define("new", {
        newsDate: {
            type: DataTypes.DATE
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