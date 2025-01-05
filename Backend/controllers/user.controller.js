const userModel=require('../models/user.model');
const userServices=require('../services/user.service');
const {validationResult}=require('express-validator');
const BlacklistToken=require("../models/blackilistToken.model");

module.exports.registerUser=async (req,res)=>{
    try{
    const errors=validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }
      const {fullname,email,password}=req.body;
      
      const hashedPassword=await userModel.hashPassword(password);
        const user=await userServices.createUser({
            firstname:fullname.firstname,
            lastname:fullname.lastname,
            email,
            password:hashedPassword
        });

        const token=user.generateAuthToken();
        res.cookie('token',token, { httpOnly: true });
        res.status(201).json({user,token});
    }catch(error){
        res.status(400).send(error.message);
    }
}


module.exports.loginUser=async (req,res)=>{
    try{
    const errors=validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }
    const {email,password}=req.body;
    const user=await userModel.findOne({email}).select('+password');
    if(!user){
        return res.status(401).json({message:'Invalid email or password'});
    }
    const isMatch=await user.comparePassword(password);
    if(!isMatch){
        return res.status(401).json({message:'Invalid email or password'});
    }
    const token=user.generateAuthToken();
    res.cookie('token',token, { httpOnly: true });
    res.status(200).json({user,token});
    }catch(error){
        res.status(400).send(error.message);
    }
}

module.exports.getUserProfile = async (req, res) => {
    try {
        res.status(200).json(req.user);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports.logoutUser=async (req, res) => {
    const token = req.cookies.token ||  req.headers.authorization.split(' ')[1];
    res.clearCookie("token");
    await BlacklistToken.create({token});
    res.status(200).json({message: "Logged out successfully"});
}