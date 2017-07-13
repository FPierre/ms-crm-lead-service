const mongoose = require('mongoose')

const leadSchema = new mongoose.Schema({
  firstName: {
    type: String,
    maxLength: 255,
    trim: true
  },
  lastName: {
    type: String,
    maxLength: 255,
    trim: true
  },
  email: {
    type: String,
    maxLength: 255,
    trim: true
  },
  gender: {
    type: String,
    enum: ['female', 'male']
  },
  phone: {
    type: String,
    required: true,
    maxLength: 12,
    trim: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
})

const Lead = mongoose.model('Lead', leadSchema)

module.exports = Lead
