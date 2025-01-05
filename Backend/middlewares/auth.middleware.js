const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken");
const BlacklistToken = require("../models/blackilistToken.model");

module.exports.authuser = async (req, res, next) => {
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1];
   
    if (!token) {
        return res.status(401).json({ message: 'Unauthorized: No token provided' });
    }

    const isBlacklistedToken = await BlacklistToken.findOne({ token });
    if (isBlacklistedToken) {
        return res.status(401).json({ message: "Unauthorized: Token is blacklisted" });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_KEY);
        const user = await userModel.findById(decoded._id);
        if (!user) {
            return res.status(401).json({ message: "Unauthorized: User not found" });
        }
        req.user = user;
        return next();
    } catch (err) {
        return res.status(401).json({ message: "Unauthorized: Invalid token" });
    }
};