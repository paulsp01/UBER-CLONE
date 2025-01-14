const mongoose = require('mongoose');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const captainSchema = mongoose.Schema({
  fullname: {
    firstname: {
      type: String,
      required: true,
      min: [3, 'Firstname must be at least 3 characters'],
      max: 255
    },
    lastname: {
      type: String,
      required: true,
      min: [3, 'Lastname must be at least 3 characters'],
      max: 255
    },
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    match: [/.+@.+\..+/, 'Please enter a valid email address'],
    min: [5, 'Email must be at least 5 characters'],
    max: 255,
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
  socketId: {
    type: String,
    default: ''
  },
  date: {
    type: Date,
    default: Date.now
  },
  status: {
    type: String,
    enum: ['active', 'inactive'],
    default: 'inactive'
  },
  vehicle: {
    color: {
      type: String,
      required: true,
      min: [3, "Color must be at least 3 characters"],
      max: 50
    },
    plate: {
      type: String,
      required: true,
      unique: true,
      min: [3, "Plate must be at least 3 characters"],
      max: 20
    },
    capacity: {
      type: Number,
      required: true,
      min: [1, "Capacity should be at least 1"]
    },
    vehicletype: { // Corrected field name
      type: String,
      required: true,
      enum: ['Car', 'Motorcycle', 'Auto'],
      default: 'Car'
    },
  },
  location: {
    ltd: {
      type: Number,
    },
    lng: {
      type: Number,
    },
  }
})

captainSchema.methods.generateAuthToken = function() {
  const token = jwt.sign({ _id: this._id }, process.env.JWT_KEY, { expiresIn: '24h' });
  return token;
};

captainSchema.methods.comparePassword = async function(password) {
  const isMatch = await bcrypt.compare(password, this.password);
  return isMatch;
};

captainSchema.statics.hashPassword = async function(password) {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
}

const captainModel = mongoose.model('captain', captainSchema);
module.exports = captainModel;