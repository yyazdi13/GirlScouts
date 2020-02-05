//Middleware for restricting routes a user is not allowed to visit when not logged in
module.exports = function(req, res, next) {
    //if the user is logged in, continue with the request to the restricted route
    if (req.user) {
        return next();
    }
    //if the user isn't logged in, redirect to login page
    return res.redirect("/");
};