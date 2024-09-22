const CrudRepository = require("./CrudRepository");
const Transaction = require('../models/transaction')
class TransactionRepository extends CrudRepository {
    constructor() {
        super(Transaction);
    }
    async getWalletByPublicKey(publicKey) {
        return Wallet.findOne({ publicKey });
    }
}

module.exports = TransactionRepository;