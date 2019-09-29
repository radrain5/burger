var orm = require("./config/orm.js");

var data = orm.all("burger_name", "devoured");

console.log(data);