const connection = require("./connection")
//orm for the three request types we will be using for this project
let orm = {
    selectAll: function(tableName, cb){
        let queryString = `SELECT * FROM ${ tableName }`
        connection.query(queryString, function(err, res) {
            if(err) throw err
            cb(res);
        })
    },
    insertOne: function(tableName, options, cb){
        let queryString = `INSERT INTO ${ tableName } SET ${ options }`
        connection.query(queryString, function(err, res) {
            if(err) throw err
            cb(res);
        })
    },
    updateOne: function(tableName, setColAndValue, whereCondition, cb){
        let queryString = `UPDATE ${ tableName } SET ${ setColAndValue } WHERE ${ whereCondition }`
        connection.query(queryString, function(err, res) {
            if(err) throw err
            cb(res);
        })
    }
}

module.exports = orm