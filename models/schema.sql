---Create the Database
DROP DATABASE IF EXISTS girlscouts_db;
CREATE DATABASE girlscouts_db;

USE girlscouts_db;

CREATE TABLE users
(
userId INT NOT NULL AUTO_INCREMENT,
username VARCHAR(100) NOT NULL,
password VARCHAR(100) NOT NULL,
PRIMARY KEY (userId)
);

CREATE TABLE members
(
    memberId INT NOT NULL AUTO_INCREMENT, 
    fName VARCHAR(25) NOT NULL,
    lName VARCHAR(25) NOT NULL,
    Category SET('trooper', 'parent', 'leader') NOT NULL,
    childName VARCHAR(60),
     PRIMARY KEY (memberId),
     userId INT NOT NULL,
     FOREIGN KEY (userId) REFERENCES users(userId)
    
);

CREATE TABLE calendar_items
(
    calId INT NOT NULL,
    event_name VARCHAR(30) NOT NULL,
    event_date DATE NOT NULL,
    author VARCHAR(50) NOT NULL,
    dt_created DATETIME NOT NULL,
    dt_updated TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    
);

CREATE TABLE news
(
    newsId INT NOT NULL,
    newsDate DATE NOT NULL,
    title VARCHAR(100) NOT NULL,
    news_detail VARCHAR(255) NOT NULL,
    dt_created DATETIME NOT NULL,
    dt_updated TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
