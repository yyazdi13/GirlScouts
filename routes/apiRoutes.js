var db = require("../models");
var passport = require("../config/passport");

module.exports = function(app) {
  // Using the passport authenticate with local strategy./ If user
  //has valid login send to members page, otherwise send an error

  app.post("/api/login", passport.authenticate("local"), function(req, res) {
    res.json(req.user);
  });

  //Route to create user. If created successfully log in user if not send back an error
  app.post("/api/signup", function(req, res){
    db.User.create({
      email: req.body.email,
      username: req.body.username,
      password: req.body.password
    })
  
     .then(function() {
      res.redirect(307, "/api/login");
    })
    .catch(function(err) {
      res.status(401).json(err);
      
    });
  });

  //app.post("api/signup", function(req, res){
    //db.Members.create({
    //  firstName: req.body.firstName,
     // lastName: req.body.lastName,
    //  role: req.body.role
   // })
   // .then(function() {
   //   res.redirect(307, "/api/login")
  //  });
 // });

  //Route for logging out
  app.get("/logout", function(req, res) {
    req.logout();
    res.redirect("/");
  });

//Route to get info about user to be used on the client side
  app.get("api/user_data", function(req, res) {
    if (!req.user) {
      //user not logged in send back empty object
      res.json({});
    } else {
      //otherwise send back user's email 
      res.json({
        email: req.user.email,
        id: req.user.id
      });
    }
    });
};


  // Create a new example
  //app.post("/api/examples", function(req, res) {
  //  db.Example.create(req.body).then(function(dbExample) {
 //     res.json(dbExample);
  //  });
 // });

  // Delete an example by id
 // app.delete("/api/examples/:id", function(req, res) {
 //   db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
 //     res.json(dbExample);
//    });
////  });
//};
