DROP DATABASE IF EXISTS girlscouts_db;
CREATE DATABASE girlscouts_db;

USE girlscouts_db;

CREATE TABLE user
(
Id INT NOT NULL AUTO_INCREMENT,
username VARCHAR(100) NOT NULL,
passwd VARCHAR(100) NOT NULL,
PRIMARY KEY (Id)
);

CREATE TABLE members
(
    Id INT NOT NULL AUTO_INCREMENT, 
    fName VARCHAR(50) NOT NULL,
    lname VARCHAR(50) NOT NULL,
    Category SET('trooper', 'parent', 'leader') NOT NULL,
    childName VARCHAR(60),
     PRIMARY KEY (Id),
     userId INT NOT NULL,
     FOREIGN KEY (userId) REFERENCES user(Id)
    
);

CREATE TABLE calendar_items
(
    Id INT NOT NULL,
    event_name VARCHAR(30) NOT NULL,
    event_date DATE NOT NULL,
    dt_created DATETIME NOT NULL,
    dt_updated TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    memberId INT NOT NULL,
    PRIMARY KEY (id),
   FOREIGN KEY (memberId) REFERENCES members (Id)
    
);

CREATE TABLE news
(
    Id INT NOT NULL,
    newsDate DATE NOT NULL,
    title VARCHAR(100) NOT NULL,
    news_detail VARCHAR(255) NOT NULL,
    author VARCHAR(50) NOT NULL,
    dt_created DATETIME NOT NULL,
    dt_updated TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id)
    
);

CREATE TABLE blog
(
    Id INT NOT NULL,
    chatComments VARCHAR(200) NOT NULL,
    blogId INT NOT NULL,
    dt_created DATETIME NOT NULL,
    dt_updated TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id),
    FOREIGN KEY (blogId) REFERENCES members(Id)

);