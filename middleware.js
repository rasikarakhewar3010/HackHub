const Hackathon = require("./models/Hackathon.js");
// const Review = require("./models/review.js");
const ExpressError = require("./utils/ExpressError.js");
const { hackathonSchema } = require("./schema.js");
const {  participateSchema} = require("./schema.js");

module.exports.isLoggedIn = (req, res, next) => {
    if (!req.isAuthenticated()) {
        //rdirectUrl save
        req.session.redirectUrl = req.originalUrl;
        req.flash("error", "You must be logged in ");
        return res.redirect("/login"); // Prevent further execution by returning
    }
    next(); // Proceed to the next middleware if authenticated
};

module.exports.saveRedirectUrl = (req,res, next) =>{
    if(req.session.redirectUrl) {
        res.locals.redirectUrl =req.session.redirectUrl
    }
    next();
};


// middleware to identify who is owner of listing
module.exports.isOwner = async (req,res,next) =>{
    let { id } = req.params;
    let listing = await Hackathon.findById(id);
    if(!listing.owner.equals(res.locals.currentUser._id)){
        req.flash("error","You dont't have permission");
        return res.redirect(`/listings/${id}`);
    }

    next();
};

module.exports.validateListing = (req, res, next) => {
    const { error } = hackathonSchema.validate(req.body);
    if (error) {
        const msg = error.details.map(el => el.message).join(', ');
        return next(new ExpressError(msg, 400));
    }
    next();
};


module.exports.validateHackathon = (req, res, next) => {
    const { error } = hackathonSchema.validate(req.body, { abortEarly: false });
    if (error) {
        // Generate a detailed error message
        const msg = error.details.map(el => el.message).join(', ');
        req.flash('error', msg); // Flash the error message
        return res.redirect('back'); // Redirect to the same page
    } else {
        next(); // Continue to the next middleware/route handler
    }
};



module.exports.validateParticipation = (req, res, next) => {
    const { error } = participateSchema.validate(req.body, { abortEarly: false });
    if (error) {
        // Generate a detailed error message
        const msg = error.details.map(el => el.message).join(', ');
        req.flash('error', msg); // Flash the error message
        return res.redirect('back'); // Redirect to the same page
    } else {
        next(); // Continue to the next middleware/route handler
    }
};





