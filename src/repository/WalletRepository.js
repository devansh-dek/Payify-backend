const CrudRepository = require("./CrudRepository");
const Wallet = require('../models/wallet')
class WalletRepository extends CrudRepository {
    constructor() {
        super(Wallet)
    }
}

module.exports = WalletRepository