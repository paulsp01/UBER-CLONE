const captainModel=require('../models/captain.model');

module.exports.createCaptain=async ({firstname,lastname,email,password,vehicle})=>{
    try{
        const { color, plate, capacity, vechiletype } = vehicle;
        if(!firstname || !email || !password || !color || !plate || !capacity || !vechiletype){
            throw new Error('All fields are required');
        }

        const captain = await captainModel.create({
            fullname: {
                firstname,
                lastname
            },
            email,
            password,
            vehicle: {
                color,
                plate,
                capacity,
                vechiletype
            }
        });
        return captain;
    
    }catch(error){
        throw new Error(error.message);
    }
}

