CREATE DATABASE burger_db;
USE burger_db;

CREATE TABLE burger_name
(id int NOT NULL AUTO_INCREMENT,
burger_name varchar(30)NOT NULL,
devoured BOOL DEFAULT false,
PRIMARY KEY (id),
)