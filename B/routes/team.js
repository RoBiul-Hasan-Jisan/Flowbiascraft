import express from 'express';
import Team from '../models/Team.js';

const router = express.Router();

// GET all team members
router.get('/', async (req, res) => {
  try {
    const team = await Team.find({ isActive: true }).sort({ order: 1 });
    
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

export default router;