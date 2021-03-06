const orm = require('../config/orm')
//model that will use the orm to set up so controller can use
var burger = {
    selectAll: function(cb) {
      orm.selectAll("burgers", function(res) {
        cb(res);
      })
    },
    insertOne: function(options, cb) {
      orm.insertOne("burgers", options, function(res) {
        cb(res);
      });
    },
    updateOne: function(objColVals, condition, cb) {
      orm.updateOne("burgers", objColVals, condition, function(res) {
        cb(res);
      });
    }
  };
  
module.exports = burger;