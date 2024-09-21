const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    publicKey: {
        type: String,
        required: false,
        unique: true
    },
    privateKey: {
        type: String,
        required: false,
        unique: true
    }
});

const User = mongoose.model('User', userSchema);
