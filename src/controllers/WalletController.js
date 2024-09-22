const WalletService = require('../services/WalletService');
const walletService = new WalletService();

exports.createWallet = async (req, res) => {
    const { userId } = req.body;

    try {
        const wallet = await walletService.createWallet(userId);
        res.status(201).json({
            message: 'Wallet created successfully',
            wallet
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.addExistingWallet = async (req, res) => {
    const { userId, publicKey, privateKey } = req.body;

    try {
        const wallet = await walletService.addExistingWallet(userId, publicKey, privateKey);
        res.status(201).json({
            message: 'Existing wallet added successfully',
            wallet
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getWalletByUserId = async (req, res) => {
    const { userId } = req.params;

    try {
        const wallet = await walletService.getWalletByUserId(userId);
        res.status(200).json(wallet);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getWallet = async (req, res) => {
    const { walletId } = req.params;

    try {
        const wallet = await walletService.getWallet(walletId);
        res.status(200).json(wallet);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.updateWallet = async (req, res) => {
    const { walletId } = req.params;
    const updateData = req.body;

    try {
        const updatedWallet = await walletService.updateWallet(walletId, updateData);
        res.status(200).json(updatedWallet);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deleteWallet = async (req, res) => {
    const { walletId } = req.params;

    try {
        await walletService.deleteWallet(walletId);
        res.status(200).json({ message: 'Wallet deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
