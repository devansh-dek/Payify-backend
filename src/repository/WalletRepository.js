const CrudRepository = require("./CrudRepository");
const User = require('../models/user')

class WalletRepository extends CrudRepository {
    constructor() {
        super(User)
    }
}

module.exports = WalletRepository