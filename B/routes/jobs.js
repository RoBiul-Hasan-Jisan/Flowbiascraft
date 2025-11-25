import express from 'express';
import Job from '../models/Job.js';

const router = express.Router();

// GET all jobs
router.get('/', async (req, res) => {
  try {
    const { location, department, type } = req.query;
    let query = { isActive: true };
    
    if (location && location !== 'All') {
      query.location = location;
    }
    
    if (department) {
      query.department = department;
    }
    
    if (type) {
      query.type = type;
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

// GET unique locations and departments for filters
router.get('/filters', async (req, res) => {
  try {
    const locations = await Job.distinct('location', { isActive: true });
    const departments = await Job.distinct('department', { isActive: true });
    const types = await Job.distinct('type', { isActive: true });
    
    res.json({
      success: true,
      data: {
        locations,
        departments,
        types
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

export default router;