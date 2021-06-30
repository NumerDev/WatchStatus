const mongoose = require("mongoose");

const positionSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },

  type: {
    type: String,
    trim: true,
  },

  genre: {
    action: {
      type: Boolean,
      default: false,
    },
    scifi: {
      type: Boolean,
      default: false,
    },
    romanse: {
      type: Boolean,
      default: false,
    },
    horror: {
      type: Boolean,
      default: false,
    },
    drama: {
      type: Boolean,
      default: false,
    },
    adventure: {
      type: Boolean,
      default: false,
    },
  },

  season: {
    type: Number,
    minlength: 1,
    required: true,
  },

  episode: {
    type: Number,
    minlength: 1,
    required: true,
  },
});

const Position = mongoose.model("Position", positionSchema);

module.exports = { Position };
