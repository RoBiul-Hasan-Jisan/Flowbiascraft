import mongoose from 'mongoose';

const officeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  address: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phone: String,
  country: {
    type: String,
    required: true
  },
  coordinates: {
    lat: Number,
    lng: Number
  },
  isActive: {
    type: Boolean,
    default: true
  },
  order: {
    type: Number,
    default: 0
  }
}, {
  timestamps: true
});

export default mongoose.model('Office', officeSchema);