const orm = require('../config/orm')

var burger = {
    selectAll: function() {
      orm.selectAll("burgers");
    },
    insertOne: function(options) {
      orm.insertOne("burgers", options);
    },
    updateOne: function(objColVals, condition) {
      orm.updateOne("burgers", objColVals, condition);
    }
  };
  
module.exports = cat;