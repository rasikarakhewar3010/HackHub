const Participate = require("../models/participate.js");
const Hackathon = require("../models/Hackathon.js");


module.exports.renderParticipent = async (req, res) => {
        const { id } = req.params;

        // Ensure hackathon ID exists
        const listing = await Hackathon.findById(id);
        if (!listing) {
            req.flash("error", "Hackathon not found!");
            return res.redirect("/hackathon");
        }

        res.render("Hakathon/participate.ejs", { listing });
};

module.exports.participate = async (req, res) => {
    let hackathon = await Hackathon.findById(req.params.id);

    if (!hackathon) {
        req.flash("error", "Hackathon not found!");
        return res.redirect("/hackathon");
    }

    // Check if the maximum participant limit has been reached
    if (hackathon.currentParticipants >= hackathon.maxParticipants) {
        req.flash("error", "Registration closed: Maximum participants reached!");
        return res.redirect(`/hackathon/${hackathon._id}`);
    }

    // Create new participant
    let newParticipante = new Participate(req.body.participate);

    // Set the logged-in user as the participant
    newParticipante.participant = req.user._id;
    hackathon.participates.push(newParticipante);

    // Save the new participant
    await newParticipante.save();

    hackathon.currentParticipants += 1;

    // Save the updated hackathon
    await hackathon.save();

    req.flash("success", "Successfully registered for the hackathon!");
    res.redirect(`/hackathon/${hackathon._id}`); // Redirect to the hackathon details page
};