var db = require("../models");

module.exports = function (app) {
  // Load index page
  app.get("/", function (req, res) {
    db.Example.findAll({}).then(function (dbExamples) {
      res.render("main", {
        msg: "Welcome!",
        examples: dbExamples
      });
    });
  });

  

  //just serve a simple page for calendar integration
  app.get("/calendar", function (req, res) {
    // res.sendFile(path.join(__dirname,"../public/calendar.html"))
    res.render("calendar");

  });

  //just serve a simple page for photo integration
  app.get("/photos", function (req, res) {
    // res.sendFile(path.join(__dirname,"../public/calendar.html"))
    res.render("photos");

  });

  // Load example page and pass in an example by id
  app.get("/example/:id", function (req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function (dbExample) {
      res.render("example", {
        example: dbExample
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function (req, res) {
    res.render("404");
  });
};
