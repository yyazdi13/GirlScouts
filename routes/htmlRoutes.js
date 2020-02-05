var db = require("../models");
var Handlebars = require("handlebars");
var MomentHandler = require("handlebars.moment");
var handlebars = require('handlebars');
handlebars.registerHelper('moment', require('helper-moment'));
var moment = require('helper-moment');


//requiring a path so we can use relative routes to html
var path = require("path");

//requiring middleware to check if user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated");

MomentHandler.registerHelpers(Handlebars);
const { google } = require('googleapis');
const SCOPES = 'https://www.googleapis.com/auth/calendar.readonly';
const GOOGLE_PRIVATE_KEY = "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDKNtf89JiporUl\n2+gf1lPpZ8SxaBDGCJ3R60UowkzZTAYMP0BRVgD36dkDcmSOsn7NLx55tyZmL1t3\ntlPXFjbnbn8CRJT6F3EheH5mH4RVINRnj49IyuaX44oxiDm2jVNbT2UjqSB+uX53\n/Grr0RGIBOSu/+35R0mJc5iMD3NSM0PdoTtkoEfpEjBxcFQC+8zGgek4tVUKsAuk\ndVUQlZvr6jOeZ5AOgHFyrkUbliNRPpkfSVjHlZhwG+jScVAJxedkfsuStTPBhoTz\n0Ries8QfnRd8YM3HFgOXC+NZxl9LMeBGX7BvLMHp6/2q4SliWKpYHDL5eypWYMGk\nnnYg8oOXAgMBAAECggEAR4GjWTEJdxsxYaTk7bU10Ri/xlhdbhoH7P58Y1BqKoEm\ntlf7n4eBKinIct6VzpwyGM6rwTDR5Fqkxq1z8mBJpAc/5IZqBBIcEFDyqZxFiHDm\ni4SJj50oc9eju6ZHelV5f5WQ105sTkO8BCP/j0pMH8RTNcsM1RSvXWrCK+0ew5b5\niX4zCBiR6JeaYdAPQpDBX4KjlNV3Of04D7Z2F+jMGrl0SZVLx+ijHZg5D/b7gxoz\nYJQkNalzWn6djFxw2aBGmTT5tQpV4kY6K9qkueFIGFa7CKJSY89EL0kXtu+7YGo+\nXbAMAbTufZLUIb9O564AG3kwx8raeXPFpWzfwIsmMQKBgQD8K57CW1PnsEofjqI4\n0RMlEQxXQGNdk/O9AfI115sy/FMJprN/9zp4Sf23rIthesE7iGBgunwCZh/0yaxn\nEmXRTOH0nLf4krFMcsXgqe/UV1qZqMwaWhzKsd0EFfifo3AWmG6pUg3vg7QAB4Hm\nrFCgy1ldfPeVpoT7n7Q+Xo8EGQKBgQDNSQFwj3uy0yvTfyDxOQtrNG/1Jnix0oav\n/MQ1nAhF4USoiWNBKB1M2tePoUImSB2y1j6JXlmRC/CTM688FB3cWPIYvfB5M6A0\nRbzh2tQQjM9cqUTvRgcbjMlu48AdLCFJRusZaMccg9Se6LdqIsA/yx1YYA0uxQVI\n5QSsBJc7LwKBgQDaecBWi2GqfiX6KU2LBDkeCCM1BOgSDzlBLAp5c49XIR2gYvlp\niPzzcseK9sbbccswlPtLUsZWHbzaDFB+DIaCS6YIlC8gAZfysA2YlCLhSb2JG6GZ\nwzDmvCrMe2yogqV+LhrSP/Eq7mRpEhgNjoVcilGmmbq3wUm956P11V77IQKBgQDE\nAqFNSLNj3B5Mo2Zg7YbppfgAq+syX0IbZ84xIfsEPkPAaO5MmHDhoVOR4Pe4dcNl\nrwunPl9nD292HjODufGJI6SF21ZxY8nkH3JqdPdnlguo/jbEAKlotNTg/LXDJQ/j\nV8PDTzhPEdFCqhH3VZcbUmWCrLPppFWXdJUxanC8IQKBgAcpUhu0pnJKImxhKO0c\nU4K7gOIP5/S85sa8ERv5OZxO9n7mRGdYXufPDyy7QTRJJ4GlLbORWR9q1jxG+8Zt\nyVhGHcvac+mbHvJ2NVV0GHRv+Vo/dqJv60a1rPynlsW1BC/PpjhIEu1ETi9VL9fF\nhGfrUL1oZBrRoUuiCTNMhw3m\n-----END PRIVATE KEY-----\n"
const GOOGLE_CLIENT_EMAIL = "scogrils74@girlscouts5.iam.gserviceaccount.com"
const GOOGLE_PROJECT_NUMBER = "814714271810"
const GOOGLE_CALENDAR_ID = "scogrils74@gmail.com"
module.exports = function (app) {

  //just serve a simple page for calendar integration
  app.get("/", function (req, res) {
    // res.sendFile(path.join(__dirname,"../public/calendar.html"))
    // res.render("calendar");
    const jwtClient = new google.auth.JWT(
      GOOGLE_CLIENT_EMAIL,
      null,
      GOOGLE_PRIVATE_KEY,
      SCOPES
    );

    const calendar = google.calendar({
      version: 'v3',
      project: GOOGLE_PROJECT_NUMBER,
      auth: jwtClient
    });

    calendar.events.list({
      calendarId: GOOGLE_CALENDAR_ID,
      timeMin: (new Date()).toISOString(),
      maxResults: 10,
      singleEvents: true,
      orderBy: 'startTime',
    }, (error, result) => {
      if (error) {
        res.send(JSON.stringify({ error: error }));
      } else {
        if (result.data.items.length) {
          // res.send(JSON.stringify({ events: result.data.items }));
          //console.log(result.data.items)
          res.render("index", {
            events: result.data.items
          })
        } else {
          res.send(JSON.stringify({ message: 'No upcoming events found.' }));
        }
      }
    });

  });
  // Load example page and pass in an example by id
  app.get("/example/:id", function (req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function (dbExample) {
      res.render("example", {
        example: dbExample
      });
    });
  });
  // PHotos
  app.get("/photos", function (req, res) {
    res.render("photos");
  });

  // calendar page
  app.get("/calendar", function (req, res) {
    res.render("calendar");
  });

  // signup page.  this might not be the right way to do this.  but for debug purposes, this gets to it
  app.get("/signup", function (req, res) {
    res.render("signup");
  });

  //If user who is not logged tries to access they are redirected to signup
  //app.get("/members", isAuthenticated, function (req, res) {
    app.get("/members",  function (req, res) {
    res.render("members")
    //res.sendFile(path.join(__dirname, "../public/members.html"));
    //if (req.user) {
    //res.redirect("/signup");
  });

  app.get("/login", function (req, res) {
    //if the user already has an account send to members page
    //console.log("login works");
    res.render("login");
    if (req.user) {
      res.render("members");
    }
    //res.sendFile(path.join(__dirname, "../public/login.html"));
   // res.render("/");
    //res.render("login")
  });

  // Render 404 page for any unmatched routes
  app.get("*", function (req, res) {
    res.render("404");
  });
};