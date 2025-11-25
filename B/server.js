import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import dotenv from 'dotenv';

// Routes
import serviceRoutes from './routes/services.js';
import technologyRoutes from './routes/technologies.js';
import customerRoutes from './routes/customers.js';
import projectRoutes from './routes/projects.js';
import teamRoutes from './routes/team.js';
import jobRoutes from './routes/jobs.js';
import officeRoutes from './routes/offices.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(helmet());
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  credentials: true
}));
app.use(express.json());

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100
});
app.use(limiter);

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/flowbiascraft')
.then(() => console.log('✅ Connected to MongoDB'))
.catch(err => console.error('❌ MongoDB connection error:', err));

// Routes
app.use('/api/services', serviceRoutes);
app.use('/api/technologies', technologyRoutes);
app.use('/api/customers', customerRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/team', teamRoutes);
app.use('/api/jobs', jobRoutes);
app.use('/api/offices', officeRoutes);

// Health check
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    message: 'FlowBiasCraft API is running',
    timestamp: new Date().toISOString()
  });
});

// FIXED: 404 handler - use proper path parameter
app.use('/:any', (req, res) => {
  res.status(404).json({ 
    success: false,
    error: 'Route not found',
    path: req.params.any
  });
});

// Root route
app.get('/', (req, res) => {
  res.json({
    success: true,
    message: 'FlowBiasCraft Backend API',
    version: '1.0.0',
    endpoints: {
      services: '/api/services',
      technologies: '/api/technologies',
      customers: '/api/customers',
      projects: '/api/projects',
      team: '/api/team',
      jobs: '/api/jobs',
      offices: '/api/offices',
      health: '/api/health'
    }
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Error:', err.stack);
  res.status(500).json({ 
    success: false,
    error: 'Internal server error',
    message: process.env.NODE_ENV === 'development' ? err.message : 'Something went wrong!'
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📊 Environment: ${process.env.NODE_ENV || 'development'}`);
  console.log(`🔗 API Base URL: http://localhost:${PORT}/api`);
});