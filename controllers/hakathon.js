const Hackathon = require("../models/Hackathon");
const Participate = require("../models/participate.js");


module.exports.index= async (req, res) => {
    const allListings = await Hackathon.find({});
    res.render("Hakathon/index.ejs" , { allListings });
}

module.exports.listings = async (req, res) => {
    const allListings = await Hackathon.find({});
    res.render("Hakathon/listing.ejs", { allListings });
}

module.exports.organizeHackathon = (req, res) => {
    res.render("Hakathon/organize.ejs");
}

module.exports.create = async (req, res) => {
    try {
        let url = req.file?.path || "https://www.phoneswiki.com/wp-content/uploads/2022/08/hackathon.jpg";
        let filename = req.file?.filename || "hackathonimage";

        const newListing = new Hackathon(req.body.hackathon);
        newListing.owner = req.user._id;
        newListing.image = { url, filename };
        await newListing.save();
        req.flash("success", "New Hackathon Created!");
        res.redirect("/hackathon/listing");
    } catch (err) {
        console.error("Error saving Hackathon:", err.message);
        req.flash("error", "Failed to create Hackathon.");
        return res.redirect("/hackathon/new");
    }
}

module.exports.hackathonGuide = (req,res)=>{
    res.render("Hakathon/hackGuide.ejs")
}

module.exports.showHackathon = async (req, res) => {
    const { id } = req.params;
    const listing = await Hackathon.findById(id)
        .populate({
            path: 'participates',
            populate: {
                path: "participant",
                select: 'username',  // Optional: Fetch only the `username` field
            }
        })
        .populate('owner');
    const participants = await Participate.find({ id });
    const totalParticipants = participants.length;

    if (!listing) {
        req.flash("error", "Hackathon you requested does not exist!");
        return res.redirect("/listings");
    }
    res.render("Hakathon/show.ejs", { listing, participates: listing.participates ,totalParticipants });
}

module.exports.deleteHackathon = async (req, res) => {
    const { id } = req.params;
    const deletedListing = await Hackathon.findByIdAndDelete(id);
    if (!deletedListing) {
        req.flash("error", "Hackathon not found!");
        return res.redirect("/hackathon/listing");
    }
    req.flash("success", "Hackathon Deleted!");
    res.redirect("/hackathon/listing");
}