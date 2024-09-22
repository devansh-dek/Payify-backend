const WalletRepository = require('../repository/WalletRepository');
const walletRepository = new WalletRepository();
const { Keypair } = require('@solana/web3.js');
const bs58 = require('bs58');

class WalletService {

    async createWallet(userId) {
        try {
            const keypair = Keypair.generate();
            const publicKey = keypair.publicKey.toString();
            // const privateKey = bs58.encode(keypair.secretKey);
            const privateKey = keypair.privateKey.toString();
            const walletData = {
                userId,
                publicKey,
                privateKey
            };
            const wallet = await walletRepository.create(walletData);

            return wallet;
        } catch (error) {
            throw new Error('Error creating wallet: ' + error.message);
        }
    }

    async addExistingWallet(userId, publicKey, privateKey) {
        try {
            const walletData = {
                userId,
                publicKey,
                privateKey
            };
            const wallet = await walletRepository.create(walletData);
            return wallet;
        } catch (error) {
            throw new Error('Error adding existing wallet: ' + error.message);
        }
    }

    async getWalletByUserId(userId) {
        try {
            const wallet = await walletRepository.getAll({ userId });
            return wallet;
        } catch (error) {
            throw new Error('Error retrieving wallet: ' + error.message);
        }
    }

    async getWallet(walletId) {
        try {
            const wallet = await walletRepository.get(walletId);
            return wallet;
        } catch (error) {
            throw new Error('Error retrieving wallet: ' + error.message);
        }
    }

    async updateWallet(walletId, updateData) {
        try {
            const updatedWallet = await walletRepository.update(walletId, updateData);
            return updatedWallet;
        } catch (error) {
            throw new Error('Error updating wallet: ' + error.message);
        }
    }

    async deleteWallet(walletId) {
        try {
            const deletedWallet = await walletRepository.destroy(walletId);
            return deletedWallet;
        } catch (error) {
            throw new Error('Error deleting wallet: ' + error.message);
        }
    }
}

module.exports = WalletService;
