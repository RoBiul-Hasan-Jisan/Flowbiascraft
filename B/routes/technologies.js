import express from 'express';
import Technology from '../models/Technology.js';

const router = express.Router();

// GET all technologies
router.get('/', async (req, res) => {
  try {
    const { category } = req.query;
    let query = { isActive: true };
    
    if (category) {
      query.category = category;
    }
    
    const technologies = await Technology.find(query).sort({ name: 1 });
    
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

// GET technologies by category
router.get('/category/:category', async (req, res) => {
  try {
    const technologies = await Technology.find({
      category: req.params.category,
      isActive: true
    }).sort({ name: 1 });
    
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

export default router;