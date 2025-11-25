import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

// Import your models
import Service from './models/Service.js';
import Technology from './models/Technology.js';
import Customer from './models/Customer.js';
import Project from './models/Project.js';
import Team from './models/Team.js';
import Job from './models/Job.js';
import Office from './models/Office.js';

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/flowbiascraft')
  .then(() => console.log('✅ Connected to MongoDB'))
  .catch(err => console.error('❌ MongoDB connection error:', err));

// Routes

// GET all services
app.get('/api/services', async (req, res) => {
  try {
    const { type, category } = req.query;
    let query = { isActive: true };
    
    if (type) {
      query.serviceType = type;
    }
    
    if (category) {
      query.category = category;
    }
    
    const services = await Service.find(query).sort({ order: 1 });
    
    res.json({
      success: true,
      count: services.length,
      data: services
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

// GET services by type
app.get('/api/services/type/:type', async (req, res) => {
  try {
    const services = await Service.find({
      serviceType: req.params.type,
      isActive: true
    }).sort({ order: 1 });
    
    res.json({
      success: true,
      count: services.length,
      data: services
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

// GET all technologies
app.get('/api/technologies', async (req, res) => {
  try {
    const { category } = req.query;
    let query = {};
    
    if (category) {
      query.category = category;
    }
    
    const technologies = await Technology.find(query).sort({ proficiency: -1, name: 1 });
    
    res.json({
      success: true,
      count: technologies.length,
      data: technologies
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

// GET customers & partners
app.get('/api/customers', async (req, res) => {
  try {
    const { type } = req.query;
    let query = { isFeatured: true };
    
    if (type) {
      query.type = type;
    }
    
    const customers = await Customer.find(query).sort({ order: 1 });
    
    res.json({
      success: true,
      count: customers.length,
      data: customers
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

// GET all projects
app.get('/api/projects', async (req, res) => {
  try {
    const { category } = req.query;
    let query = { isFeatured: true };
    
    if (category) {
      query.category = category;
    }
    
    const projects = await Project.find(query).sort({ order: 1 });
    
    res.json({
      success: true,
      count: projects.length,
      data: projects
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

// GET team members
app.get('/api/team', async (req, res) => {
  try {
    const team = await Team.find().sort({ order: 1 });
    
    res.json({
      success: true,
      count: team.length,
      data: team
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

// GET job openings
app.get('/api/jobs', async (req, res) => {
  try {
    const { type, department } = req.query;
    let query = {};
    
    if (type) {
      query.type = type;
    }
    
    if (department) {
      query.department = department;
    }
    
    const jobs = await Job.find(query).sort({ order: 1 });
    
    res.json({
      success: true,
      count: jobs.length,
      data: jobs
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

// GET office locations
app.get('/api/offices', async (req, res) => {
  try {
    const offices = await Office.find().sort({ order: 1 });
    
    res.json({
      success: true,
      count: offices.length,
      data: offices
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

// GET all data (combined endpoint)
app.get('/api/all-data', async (req, res) => {
  try {
    const [services, technologies, customers, projects, team, jobs, offices] = await Promise.all([
      Service.find({ isActive: true }).sort({ order: 1 }),
      Technology.find().sort({ proficiency: -1 }),
      Customer.find({ isFeatured: true }).sort({ order: 1 }),
      Project.find({ isFeatured: true }).sort({ order: 1 }),
      Team.find().sort({ order: 1 }),
      Job.find().sort({ order: 1 }),
      Office.find().sort({ order: 1 })
    ]);
    
    res.json({
      success: true,
      data: {
        services,
        technologies,
        customers,
        projects,
        team,
        jobs,
        offices
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ 
    success: true,
    message: 'FlowbiasCraft Backend is running!',
    timestamp: new Date().toISOString()
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Backend server running on http://localhost:${PORT}`);
});