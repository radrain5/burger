CREATE DATABASE burgers_DB;

USE burgers_DB;

CREATE TABLE burgers(
    id INT NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(45) NOT NULL,
    devoured BOOLEAN,
    PRIMARY KEY (id)
);