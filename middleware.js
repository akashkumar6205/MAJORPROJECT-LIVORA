//  check that the user is signin or not for creating the listing
module.exports.isLoggedIn = (req, res, next) => {
    if(!req.isAuthenticated()){
        req.flash("error", "you are not logged in to create listing!");
        return res.redirect("/login");
    }
    next();
}