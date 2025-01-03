const express = require('express');
const router = express.Router();
const User = require("../models/user.js");
const wrapAsync = require('../utils/wrapAsync');
const passport = require('passport');
const { saveRedirectUrl } = require('../middleware.js');
const userControllers = require('../controllers/user.js')

// GET /signup
router.get("/signup", userControllers.renserSignup);

// POST /signup
router.post("/signup", wrapAsync( userControllers.signup));

// GET /login
router.get("/login", userControllers.renderLogin );

// POST /login
router.post(
    "/login",
    saveRedirectUrl,
    passport.authenticate('local', { failureRedirect: '/login', failureFlash: true }),
    userControllers.login
);

// logout
router.get("/logout", userControllers.logout);

module.exports = router;
