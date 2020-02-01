
INSERT INTO user (username, email,passwd) VALUES ("bg","bg@gmail.com", "test");
INSERT INTO user (username, email,passwd) VALUES ("cg","cg@gmail.com", "test");
INSERT INTO user (username, email,passwd) VALUES ("kg", "kg@gmail.com","test");
INSERT INTO user (username, email,passwd) VALUES ("sh", "sh@gmail.com","test");

INSERT INTO members (fName, lName, Category, child, userId) VALUES ("Clara", "Gotchall", "trooper",NULL,2);
INSERT INTO members (fName, lName, Category, child, userId) VALUES ("Bob", "Gotchall", "parent", 1,1);
INSERT INTO members (fName, lName, Category, child, userId) VALUES ("Kim", "Gotchall", "parent", 1,3);
INSERT INTO members (fName, lName, Category, child, userId) VALUES ("Serina", "Harris", "Leader", NULL,4);

INSERT INTO blog (author,body) VALUES (1,"Hi everybody");