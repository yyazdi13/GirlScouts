//requiring a path so we can use relative routes to html
var path = require("path");

//requiring middleware to check if user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function (app) {
  // If user does not have account redirect to members page
  app.get("/", function (req, res) {
    //res.render("signup");
    if (req.user) {
      res.redirect("members");
    }
    res.sendFile(path.join(__dirname, "../public/signup.html"));
  });

  app.get("/login", function (req, res) {
    //if the user already has a login username send members page to create member profile
    //console.log("login works");
    //res.render("login");
    if (req.user) {
      res.redirect("/members");
    }
    res.sendFile(path.join(__dirname, "../public/login.html"));

  });
  //If user who is not logged tries to access they are redirected to signup
  app.get("/members", isAuthenticated, function (req, res) {
    res.sendFile(path.join(__dirname, "../public/members.html"));
    // if (req.user) {
    //res.redirect("/signup");

  });
  app.get("/main", function (req, res) {
    //if the user already has an account and member profile created redirect to main girl Scouts page
    //console.log("login works");
    //res.render("login");
    if (req.user) {
      res.redirect("/main");
    }
    res.sendFile(path.join(__dirname, "../public/main.html"));
    });

    app.get("/members", function (req, res) {
      //The user has created the user profile and finished the memmber profile and now ready to login
      //console.log("login works");
      //res.render("login");
      if (req.user) {
        res.redirect("/login");
      }
      res.sendFile(path.join(__dirname, "../public/members.html"));
    })
};

