const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const captainController = require('../controllers/captain.controller');

router.post('/register', [
    body('fullname.firstname').notEmpty().withMessage('First name is required').isLength({ min: 3 }).withMessage('First name must be at least 3 characters long'),
   
    body('email').isEmail().withMessage('Email is invalid'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
    body('vehicle.color').notEmpty().withMessage('Vehicle color is required').isLength({ min: 3 }).withMessage('Color must be at least 3 characters long'),
    body('vehicle.plate').notEmpty().withMessage('Vehicle plate is required').isLength({ min: 3 }).withMessage('Plate must be at least 3 characters long'),
    body('vehicle.capacity').isInt({ min: 1 }).withMessage('Capacity should be at least 1'),
    body('vehicle.vechiletype').notEmpty().withMessage('Vehicle type is required').isIn(['Car', 'Motorcycle', 'Auto']).withMessage('Invalid vehicle type'),
  
],captainController.registerCaptain);

module.exports = router;