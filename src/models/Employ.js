const mongoose = require("mongoose");
const Schema = mongoose.Schema(
  {
    firstname: {
      type: String,
      required: true,
      lowercase: true,
    },
    lastname: {
        type: String,
        required: true,
        lowercase: true,
      },
      middlename:{
        type: String,
        lowercase: true,
      },
    email: {
      type: String,
    },
    mobileno: {
      type: String,
      required: true,
    },
    ssn: {
        type: String,
        required: true,
      },
      gender: {
        type: String,
        enum: ["Male","Female"],
        required: true,
      },
      DOB: {
         type: String,
         required: true
        },
    designation:{
        type: String,
        required: true,
    },
    address:{
        type: String,
    },
    town:{
        type: String,
    },
    region:{
        type: String,
    },
    zipcode:{
        type: String,
    }
  },

  {
    timestamps: true,
  }
);

module.exports = mongoose.model("employ", Schema, "employ");
