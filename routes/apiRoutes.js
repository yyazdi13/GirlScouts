var db = require("../models");


module.exports = function(app) {
  // Get all examples
  app.get("/api/examples", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.json(dbExamples);
    });
  });

  // Get all members
  app.get("/api/members", function(req, res){
    db.Member.findAll({}).then(function(data){
      res.json(data);
    });
  });
 
  //Get all blog posts
  app.get("/api/blog", function(req, res){
    db.Blog.findAll({}).then(function(data){
      res.json(data);
    });
  });

  //Get all users
  app.get("/api/users", function(req, res){
    db.User.findAll({}).then(function(data){
      res.json(data);
    });
  });

  //Get all news
  app.get("/api/news", function(req, res){
    db.News.findAll({}).then(function(data){
      res.json(data);
    });
  });

  // Create a new example
  app.post("/api/examples", function(req, res) {
    db.Example.create(req.body).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  //Create new members
  app.post("/api/members", function(req, res){
    db.Member.create({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      category: req.body.category,
      childName: req.body.childName
    }).then(function(data){
      res.json(data);
    });
  });

  //Create new blog
  app.post("/api/blog", function(req, res){
    db.Blog.create({
      chatComments: req.body.chatComments
    }).then(function(data){
      res.json(data);
    });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
      res.json(dbExample);
    });
  });

};
