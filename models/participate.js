const mongoose = require("mongoose");
const { types } = require("joi"); // This line is not used and can be removed unless needed elsewhere


const participateSchema = new mongoose.Schema({
    pname: {
        type: String,
        required: true, // Ensure name is provided
        trim: true, // Removes unnecessary spaces
        minlength: 2, // Minimum length for validation
        maxlength: 100, // Max length to prevent overly long inputs
    },
    pemail: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        match: [
            /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
            "Please enter a valid email address",
        ], // Regex for email validation
    },
    contact: {
        type: String, // Updated to String to handle leading zeroes
        required: true,
        match: [
            /^[0-9]{10}$/,
            "Contact number should be a 10-digit numeric string",
        ], // Ensures valid 10-digit phone numbers
    },
    gender: {
        type: String,
        enum: ["Male", "Female", "Other"], // Restricts to specific values
        required: true,
    },
    branch: {
        type: String,
        required: true,
        trim: true,
    },
    yearGraduate: {
        type: Number,
        required: true,
        min: 1900, // Assuming graduates won't be before 1900
        // max: new Date().getFullYear(), // Current year for realistic bounds
    },
    linkedin: {
        type: String,
        trim: true,
        match: [
            /^(https?:\/\/)?(www\.)?linkedin\.com\/.*$/,
            "Please enter a valid LinkedIn profile URL",
        ], // Optional field with URL validation if provided
    },
    participant: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User", // Ensure this matches the name of your `User` model
    },
    
    // createdAt: {
    //     type: Date,
    //     default: Date.now, // Automatically set when a document is created
    // },
    // updatedAt: {
    //     type: Date,
    //     default: Date.now, // Automatically update when the document is modified
    // },
});

// // Pre-save middleware to update the 'updatedAt' field
// participateSchema.pre("save", function (next) {
//     this.updatedAt = Date.now();
//     next();
// });

module.exports = mongoose.model("Participate", participateSchema);
