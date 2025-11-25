import express from 'express';
import Project from '../models/Project.js';

const router = express.Router();

// GET all projects
router.get('/', async (req, res) => {
  try {
    const { category, featured } = req.query;
    let query = { isActive: true };
    
    if (category) {
      query.category = category;
    }
    
    if (featured === 'true') {
      query.isFeatured = true;
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

// GET featured projects
router.get('/featured', async (req, res) => {
  try {
    const projects = await Project.find({ 
      isFeatured: true,
      isActive: true 
    }).sort({ order: 1 }).limit(6);
    
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

export default router;