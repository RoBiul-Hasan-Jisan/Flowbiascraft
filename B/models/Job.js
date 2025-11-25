import mongoose from 'mongoose';

const jobSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  location: {
    type: String,
    required: true
  },
  experience: {
    type: String,
    required: true
  },
  type: {
    type: String,
    enum: ['full-time', 'part-time', 'contract', 'remote'],
    default: 'full-time'
  },
  department: {
    type: String,
    enum: ['engineering', 'design', 'product', 'marketing', 'operations'],
    default: 'engineering'
  },
  description: String,
  requirements: [String],
  benefits: [String],
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

export default mongoose.model('Job', jobSchema);