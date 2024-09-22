const mongoose = require('mongoose');

const walletSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    publicKey: {
        type: String,
        required: true,
        unique: false
    },
    privateKey: {
        type: String,
        required: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Wallet = mongoose.model('Wallet', walletSchema);

module.exports = Wallet;
