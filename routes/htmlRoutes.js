//requiring a path so we can use relative routes to html
var path = require("path");

//requiring middleware to check if user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {
  // If user has account redirect to members page
  app.get("/", function (req, res) {
    //res.render("signup");
    if (req.user) {
      res.redirect("members");
    }
    res.sendFile(path.join(__dirname, "../public/signup.html"));
  });

  app.get("/login", function (req, res) {
    //if the user already has an account send to members page
    //console.log("login works");
    //res.render("login");
    if (req.user) {
      res.redirect("/members");
    }
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });
  //If user who is not logged tries to access they are redirected to signup
  app.get("/members", isAuthenticated, function (req, res) {
   //res.render("/members")
    res.sendFile(path.join(__dirname, "../public/members.html"));
    //if (req.user) {
      //res.redirect("/signup");
      });
};

