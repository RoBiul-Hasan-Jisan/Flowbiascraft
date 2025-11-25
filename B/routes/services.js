import express from 'express';
import Service from '../models/Service.js';

const router = express.Router();

// GET all services
router.get('/', async (req, res) => {
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
router.get('/type/:type', async (req, res) => {
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

export default router;