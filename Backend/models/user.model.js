const mongoose = require('mongoose');
const bcrypt = require('bcrypt'); 
const jwt = require('jsonwebtoken');



const userSchema = new mongoose.Schema({
    fullname: 
       
        {
            firstname: {
                type: String,
                required: true,
                min: [3,'Firstname must be atleast 3 characters'],
                max: 255
            },
            lastname: {
                type: String,
               
                min: [3,'Lastname must be atleast 3 characters'],
                max: 255
        },
    },
    email: {
        type: String,
        required: true,
        unique: true,
        min: [5,'Email must be atleast 5 characters'],
        max: 255,
    },
    password: {
        type: String,
        required: true,
        select: false,
        
        
    },

    socketId: {
        type: String,
        default: ''
    },
    date: {
        type: Date,
        default: Date.now
    }
});

userSchema.methods.generateAuthToken = function() {
    
   
    const token = jwt.sign({_id: this._id}, process.env.JWT_KEY, { expiresIn: '24h' });
    return token;
}

userSchema.methods.comparePassword = async function(password) {
    return await bcrypt.compare(password, this.password);
}

userSchema.statics.hashPassword = async function(password) {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
}

const userModel = mongoose.model('user', userSchema);
module.exports = userModel;