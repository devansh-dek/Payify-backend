const UserService = require('../services/UserService.js')
const userService = new UserService();
const { StatusCodes } = require('http-status-codes');

const create = async (req, res) => {
    try {
        const response = await userService.create(req.body.username);
        return res.status(StatusCodes.ACCEPTED).json({
            success: true,
            response: response
        })
    } catch (error) {
        console.log("ERorr is ", error);
        return res.status(StatusCodes.BAD_REQUEST).json({
            success: false,
            error: error.message
        })
    }
}


module.exports = {
    create
};