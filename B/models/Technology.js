import mongoose from 'mongoose';

const technologySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  icon: {
    type: String,
    required: true
  },
  color: {
    type: String,
    required: true
  },
  category: {
    type: String,
    enum: ['frontend', 'backend', 'mobile', 'database', 'devops', 'tools'],
    required: true
  },
  proficiency: {
    type: Number,
    min: 1,
    max: 5,
    default: 3
  },
  isActive: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true
});

export default mongoose.model('Technology', technologySchema);