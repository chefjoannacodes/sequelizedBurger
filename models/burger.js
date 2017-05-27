var Sequelize = require("sequelize");

// var sequelize = require("../config/connection.js");

//Create a burger model

module.exports = function(sequelize, DataTypes) {

var Burger = sequelize.define('burger', {
    id: {
          type: Sequelize.INTEGER,
          autoIncrement: true, 
          primaryKey: true
    },
    burger_name: {
      type: Sequelize.STRING
    },
    devoured: {
      type: Sequelize.BOOLEAN, 
      allowNull: false, 
      defaultValue: false
    }
   });
return Burger;
};







// // Export the database functions for the controller (catsController.js).
// module.exports = Burger;