const CrudRepository = require("./CrudRepository");
const User = require('../models/user.js')
console.log("USer is ", User);
class UserRepository extends CrudRepository {
    constructor() {
        super(User);
    }
}

module.exports = UserRepository;