const express = require('express');
const router = express.Router();
const { body, query } = require('express-validator');
const rideController = require('../controllers/ride.controller'); // Ensure this path is correct
const authMiddleware = require('../middlewares/auth.middleware');

router.post('/create',
    authMiddleware.authuser,
    body('pickup').isString().isLength({ min: 3 }).withMessage('Invalid pickup address'),
    body('destination').isString().isLength({ min: 3 }).withMessage('Invalid destination address'),
    body('vehicleType').isString().isIn(['auto', 'car', 'motorcycle']).withMessage('Invalid vehicle type'),
    rideController.createRide // Ensure this method is defined in ride.controller.js
);

router.get('/get-fare',
    authMiddleware.authuser,
    query('pickup').isString().isLength({ min: 3 }).withMessage('Invalid pickup address'),
    query('destination').isString().isLength({ min: 3 }).withMessage('Invalid destination address'),
    rideController.getFare // Ensure this method is defined in ride.controller.js
);

router.post('/confirm',
    authMiddleware.authcaptain,
    body('rideId').isMongoId().withMessage('Invalid ride id'),
    rideController.confirmRide // Ensure this method is defined in ride.controller.js
);

router.get('/start-ride',
    authMiddleware.authcaptain,
    query('rideId').isMongoId().withMessage('Invalid ride id'),
    query('otp').isString().isLength({ min: 6, max: 6 }).withMessage('Invalid OTP'),
    rideController.startRide // Ensure this method is defined in ride.controller.js
);

router.post('/end-ride',
    authMiddleware.authcaptain,
    body('rideId').isMongoId().withMessage('Invalid ride id'),
    rideController.endRide // Ensure this method is defined in ride.controller.js
);

module.exports = router;