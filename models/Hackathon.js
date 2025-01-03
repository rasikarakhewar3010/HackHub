const mongoose = require("mongoose");
const Participate = require("./participate.js");
const { types } = require("joi");


const HackathonSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    date: { type: Date, required: true },
    registrationDate: {
      type: Date,
      required: true,
      validate: {
        validator: function (value) {
          // Ensure registrationDate is before the event date
          return value < this.date;
        },
        message: "Registration date must be before the event date.",
      },
    },
    duration: { type: Number, required: true, min: 1 }, // Duration in hours
    description: { type: String, required: true, minlength: 10, maxlength: 1000 },
    theme: { type: String, required: true, minlength: 2, maxlength: 100 },
    maxParticipants: { type: Number, required: true, min: 1 },
    currentParticipants: { type: Number, default: 0 }, // Track current participants
    prize: { type: Number, min: 1 },
    image: {
      filename: {
        type: String,
        default: "hackathonimage",
      },
      url: {
        type: String,
        default:
          "https://www.phoneswiki.com/wp-content/uploads/2022/08/hackathon.jpg",
        set: (v) =>
          v === ""
            ? "https://www.phoneswiki.com/wp-content/uploads/2022/08/hackathon.jpg"
            : v,
      },
    },
    participates: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Participate",
      },
    ],
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  }
);

// // Virtual property for calculating end date
// HackathonSchema.virtual("endDate").get(function () {
//   const end = new Date(this.date);
//   end.setHours(end.getHours() + this.duration);
//   return end;
// });

module.exports = mongoose.model("Hackathon", HackathonSchema);
