const express = require('express');
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const { isLoggedIn , validateListing , validateHackathon ,isOwner } = require("../middleware.js");
const multer  = require('multer');
const {storage} = require("../cloudeConfig.js");
const upload = multer({storage });
const hackathonControllers = require("../controllers/hakathon.js");



//home route
router.get("/", wrapAsync(hackathonControllers.index));


// Index route
router.get("/listing", wrapAsync(hackathonControllers.listings));

// New route
router.get("/new", isLoggedIn,hackathonControllers.organizeHackathon );

// Create route
router.post(
    "/create",
    isLoggedIn,
    upload.single("hackathon[image]"),
    validateHackathon,
    validateListing, // Ensure this works after debugging
    wrapAsync( hackathonControllers.create)
);


router.get("/hackGuide",hackathonControllers.hackathonGuide );

// Show route
router.get("/:id", wrapAsync(hackathonControllers.showHackathon));

// Delete route
router.delete("/:id", 
    isLoggedIn, 
    isOwner,
    wrapAsync( hackathonControllers.deleteHackathon ));

module.exports = router;
