const express = require("express");
const router = express.Router({ mergeParams: true });
const wrapAsync = require("../utils/wrapAsync.js"); // Error handling;
const { validateParticipation, isLoggedIn } = require("../middleware.js");
const participantControllers =  require('../controllers/\/participate.js')

// Get Route
router.get(
    "/",
    isLoggedIn,
    wrapAsync(participantControllers.renderParticipent)
);

// Post Route
router.post(
    "/", // Correct route with hackathon ID
    isLoggedIn,
    validateParticipation, // Uncomment if needed
    wrapAsync(participantControllers.participate)
);

module.exports = router;
