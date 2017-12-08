var connection = require("./connection.js");

var orm = {
    selectAll: function(tableInput, col1){
        var queryString = "SELECT * FROM ?? WHERE ?? = false";
        connection.query(queryString, [tableInput, col1], function(err, result){
            console.log(result);
        })
    },
    insertOne: function(tableInput, col1, col2, col3, col4, val1, val2, val3){
        var queryString = "INSERT INTO ?? (??, ??, ??, ??) VALUES (?, ?, ?, ?)";
        connection.query(queryString, [tableInput, col1, col2, col3, col4, val1, val2, val3, CURDATE()], function(err, result){
            console.log(result);
        });
           
    },
    updateOne: function(tableInput, col1, val1, col2, val2){
        var queryString = "UPDATE ?? SET ?? = ? WHERE ?? = ?";
        connection.query(queryString, [tableInput, col1, val1, col2, val2], function(err, result){
            console.log(result);
        });
    }
};

module.exports = orm;