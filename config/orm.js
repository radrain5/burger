var connection = require("../config/connection.js");

var orm = {
    all: function() {
      var queryString = "SELECT * FROM burgers";
      connection.query(queryString, function(err, data) {
        if (err) throw err;
        console.log(data);
      })
    },
    insert: function(burger_name, devoured, cb) {
        var queryString = "INSERT INTO burgers (burger_name, devoured) VALUES (?)"
    
        connection.query(queryString, [burger_name, devoured], cb) 
           
      }
    
}

console.log(orm.all());



module.exports = orm;