var express = require("express");

var router = express.Router();

var burger = require("./models/burger.js");

router.get("/", function(res, data) {
    burgers.all(function(data) {
        res.data();
    });
});






module.exports = router;