const captainModel = require('../models/captain.model');
const captainService = require('../services/captain.service');
const { validationResult } = require('express-validator');
const BlacklistToken = require("../models/blackilistToken.model");

module.exports.registerCaptain = async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
           
            return res.status(400).json({ errors: errors.array() });
        }
       
        const { fullname, email, password, vehicle } = req.body;

        const existingCaptain = await captainModel.findOne({ email });
        if (existingCaptain) {
            return res.status(400).json({ errors: [{ msg: 'Email already exist' }] });
        }

        const hashedPassword = await captainModel.hashPassword(password);
        const captain = await captainService.createCaptain({
            fullname: {
                firstname: fullname.firstname,
                lastname: fullname.lastname, // lastname is required
            },
            email,
            password: hashedPassword,
            vehicle: {
                color: vehicle.color,
                plate: vehicle.plate,
                capacity: vehicle.capacity,
                vehicletype: vehicle.vehicletype // Ensure this matches the frontend
            }
        });

        const token = captain.generateAuthToken();
        res.cookie('token', token);
        res.status(201).json({ captain, token });
    } catch (error) {
        
        res.status(400).send(error.message);
    }
}

module.exports.loginCaptain = async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const { email, password } = req.body;
        const captain = await captainModel.findOne({ email }).select('+password');
        if (!captain) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }
        const isMatch = await captain.comparePassword(password);
        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }
        const token = captain.generateAuthToken();
        res.cookie('token', token);
        res.status(200).json({ captain, token });
    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports.getCaptainProfile = async (req, res) => {
    try {
        res.status(200).json(req.captain);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports.logoutCaptain = async (req, res) => {
    const token = req.cookies.token || req.headers.authorization.split(' ')[1];
    await BlacklistToken.create({ token });
    res.clearCookie("token");

    res.status(200).json({ message: "Logged out successfully" });
}