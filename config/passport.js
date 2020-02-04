var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;
var db = require("../models");

//Telling passport that we want to login with an email 
passport.use(new LocalStrategy(
     {
usernameField:"email"
},
function(email, password, done) {
    //when a user tries to login this runs
    db.User.findOne({
        where: {
            email: email
        }
    }).then(function(dbUser) {
        //If no user with email
        if (!dbUser) {
            return done(null, false, {
               message: "Incorrect email." 
            });
        }
        //If there is a user with the correct email but incorrect password
        else if (!dbUser.validPassword(password)) {
            return done(null, false, {
                message: "Incorrect password."
            });
        }
        //If none of the below return the user
        return done(null, dbUser);
    });
}
));

//In order to help athentication state across HTTP requests,
//Sequelize needs to serialize and deserialize the user
//Just consider this part boilerplate needed to make it all work
passport.serializeUser(function(user, cb) {
    cb(null, user);
});
passport.deserializeUser(function(obj, cb) {
cb(null, obj);
});
//Exporting our configured passport
module.exports = passport;