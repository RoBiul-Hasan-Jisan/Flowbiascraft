import express from 'express';
import Customer from '../models/Customer.js';

const router = express.Router();

// GET all customers/partners
router.get('/', async (req, res) => {
  try {
    const { type } = req.query;
    let query = { isActive: true };
    
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

// GET featured customers/partners
router.get('/featured', async (req, res) => {
  try {
    const featured = await Customer.find({ isFeatured: true, isActive: true })
      .sort({ order: 1 })
      .limit(8);
    
    res.json({
      success: true,
      count: featured.length,
      data: featured
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

export default router;