DROP DATABASE IF EXISTS hmilatodo;
CREATE DATABASE IF NOT EXISTS hmilatodo;
USE hmilatodo;

CREATE TABLE IF NOT EXISTS mylist(
Id INT(6) NOT NULL AUTO_INCREMENT,
FirstName VARCHAR(20),
LastName VARCHAR(20),
Age VARCHAR(20),
PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS secure(
Id INT(6) NOT NULL AUTO_INCREMENT,
N°cin VARCHAR(20),
Adress VARCHAR(20),
City  VARCHAR(20),

PRIMARY KEY (id)
);



insert into mylist(FirstName,LastName,Age)VALUES("AYMEN","HMILA","34");
insert into mylist(FirstName,LastName,Age)VALUES("JIHED","ABIDI","25");
insert into secure(N°cin,Adress,City)VALUES("09160574","TUNIS","DENDEN");
