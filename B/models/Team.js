import mongoose from 'mongoose';

const teamSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  role: {
    type: String,
    required: true
  },
  img: {
    type: String,
    required: true
  },
  linkedin: String,
  twitter: String,
  email: {
    type: String,
    required: true
  },
  bio: String,
  skills: [String],
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

export default mongoose.model('Team', teamSchema);