const captainModel = require('../models/captain.model');

module.exports.createCaptain = async ({ fullname, email, password, vehicle }) => {
    try {
        const { firstname, lastname } = fullname;
        const { color, plate, capacity, vehicletype } = vehicle;
        if (!firstname || !lastname || !email || !password || !color || !plate || !capacity || !vehicletype) {
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
                vehicletype
            }
        });
        return captain;
    } catch (error) {
        throw new Error(error.message);
    }
}

