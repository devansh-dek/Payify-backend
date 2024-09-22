const UserRepository = require('../repository/UserRepository');
const userRepository = new UserRepository();
class UserService {
    async create(username) {
        try {
            const response = await userRepository.create({ username });
            return response;
        } catch (error) {
            throw error;
        }
    }



}
module.exports = UserService;