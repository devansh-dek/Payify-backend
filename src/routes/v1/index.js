const express = require('express');
const router = express.Router();
const UserController = require('../../controllers/UserController.js')
const walletController = require('../../controllers/WalletController.js');


//USer Section .....................................................................

router.post('/user', UserController.create);
// Wallet Section ....................................................................................
// Carete a new wallet
router.post('/wallet', walletController.createWallet);

// Add an existing wallet
router.post('/wallet/existing', walletController.addExistingWallet);

// Get wallet by userId(Not username )
router.get('/wallet/user/:userId', walletController.getWalletByUserId);

// Get wallet by walletId
router.get('/wallet/:walletId', walletController.getWallet);

// Update and DELTE wallet
router.put('/wallet/:walletId', walletController.updateWallet);
router.delete('/wallet/:walletId', walletController.deleteWallet);

// Transaction Section ...........................................................................................

const transactionController = require('../../controllers/TransactionController.js');

// Check wallet balance
router.get('/balance/:walletId', transactionController.getBalance);

// Send SOL transaction
router.post('/send', transactionController.sendSolana);

module.exports = router;