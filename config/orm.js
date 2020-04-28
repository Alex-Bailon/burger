const connection = require("./connection");

let orm = {
    selectAll: function(tableName){
        let queryString = `SELECT * FROM ${ tableName }`
        connection.query(queryString, callback)
    },
    insertOne: function(tableName, options){
        let queryString = `INSERT INTO ${ tableName } SET ${ options }`
        connection.query(queryString, callback)
    },
    updateOne: function(tableName, setColAndValue, whereCondition){
        let queryString = `UPDATE ${ tableName } SET ${ setColAndValue } WHERE ${ whereCondition }`
        connection.query(queryString, callback)
    }
}

function callback(err, res) {
    if(err) {
      console.log('Error!')
      console.log(err)
    }
    else {
      console.table(res)
      console.log('Query successful.')
    }
}

module.exports = orm;