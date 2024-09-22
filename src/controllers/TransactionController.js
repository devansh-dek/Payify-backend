const TransactionService = require('../services/TransactionService');
const transactionService = new TransactionService();

exports.getBalance = async (req, res) => {
    const { walletId } = req.params;
    console.log("walled id is ", walletId)
    try {
        const balance = await transactionService.getWalletBalance(walletId);
        res.status(200).json({ balance });
    } catch (error) {
        console.log("Error is ", error)
        res.status(500).json({ error: error.message });
    }
};

exports.sendSolana = async (req, res) => {
    const { fromWalletId, toPublicKey, amount } = req.body;

    try {
        const result = await transactionService.sendSolana(fromWalletId, toPublicKey, amount);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
