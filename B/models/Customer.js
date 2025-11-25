import mongoose from 'mongoose';

const customerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  logo: {
    type: String,
    required: true
  },
  website: String,
  industry: String,
  type: {
    type: String,
    enum: ['customer', 'partner'],
    required: true
  },
  isFeatured: {
    type: Boolean,
    default: false
  },
  order: {
    type: Number,
    default: 0
  }
}, {
  timestamps: true
});

export default mongoose.model('Customer', customerSchema);