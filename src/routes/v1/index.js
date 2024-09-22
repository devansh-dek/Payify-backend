const express = require('express');
const router = express.Router();
const UserController = require('../../controllers/UserController.js')

router.post('/user', UserController.create);
const walletController = require('../../controllers/WalletController.js');

// Carete a new wallet
router.post('/wallet', walletController.createWallet);

// Add an existing wallet
router.post('/wallet/existing', walletController.addExistingWallet);

// Get wallet by userId(Not username )
router.get('/wallet/user/:userId', walletController.getWalletByUserId);

// Get wallet by walletId
router.get('/wallet/:walletId', walletController.getWallet);

// Update wallet
router.put('/wallet/:walletId', walletController.updateWallet);

// Delete wallet
router.delete('/wallet/:walletId', walletController.deleteWallet);

module.exports = router;