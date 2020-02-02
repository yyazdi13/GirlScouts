module.exports = function(sequelize, DataTypes){
    var Calendar_item = sequelize.define("Calendar_item", {
        event_name: {
            type: DataTypes.STRING
        },
        event_date: {
            type: DataTypes.DATE
        }
    });
    
    return Calendar_item;
}