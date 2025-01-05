const captainModel = require('../models/captain.model');
const captainService = require('../services/captain.service');
const {validationResult}=require('express-validator');

module.exports.registerCaptain=async (req,res)=>{
    try{
        const errors=validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({errors:errors.array()});
        }
        const {fullname,email,password,vehicle}=req.body;
        
        const existingCaptain = await captainModel.findOne({ email });
        if (existingCaptain) {
            return res.status(400).json({ errors: [{ msg: 'Email already exist' }] });
        }
        
        const hashedPassword=await captainModel.hashPassword(password);
        const captain=await captainService.createCaptain({
            firstname:fullname.firstname,
            lastname:fullname.lastname, // lastname is optional
            email,
            password:hashedPassword,
            vehicle: {
                color: vehicle.color,
                plate: vehicle.plate,
                capacity: vehicle.capacity,
                vechiletype: vehicle.vechiletype
            }
        });

        const token=captain.generateAuthToken();
        res.cookie('token',token);
        res.status(201).json({captain,token});
    }catch(error){
        res.status(400).send(error.message);
    }
}
