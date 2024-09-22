const TransactionRepository = require('../repository/TransactionRepository');
const WalletRepository = require('../repository/WalletRepository');
const { Connection, LAMPORTS_PER_SOL, PublicKey, Keypair } = require('@solana/web3.js');
const bs58 = require('bs58');
const { TOPUBLICKEY } = require('../config/serverConfig');
// const toPublicKey = TOPUBLICKEY;

const connection = new Connection('https://api.testnet.solana.com');

class TransactionService {
    constructor() {
        this.transactionRepository = new TransactionRepository();
        this.walletRepository = new WalletRepository();
    }

    async getWalletBalance(walletId) {
        console.log("SERVICE : got walletID ", walletId);
        const wallet = await this.walletRepository.get(walletId);
        console.log("SERVICE : got wallet ", wallet, " and publicKey is ");
        const publicKey = new PublicKey(wallet.publicKey);

        try {
            const balance = await connection.getBalance(publicKey);
            return balance / LAMPORTS_PER_SOL;
        } catch (error) {
            throw new Error('Error fetching balance: ' + error.message);
        }
    }

    async sendSolana(fromWalletId, toPublicKey, amount) {
        if (!toPublicKey) {
            toPublicKey = TOPUBLICKEY;
        }
        const fromWallet = await this.walletRepository.get(fromWalletId);
        const fromPublicKey = new PublicKey(fromWallet.publicKey);
        const fromPrivateKey = bs58.decode(fromWallet.privateKey);

        const toPublicKeyObj = new PublicKey(toPublicKey);

        const fromBalance = await this.getWalletBalance(fromWalletId);
        if (fromBalance < amount) {
            throw new Error('Insufficient balance');
        }

        try {
            const keypair = Keypair.fromSecretKey(fromPrivateKey);
            const transaction = await connection.requestAirdrop(toPublicKeyObj, amount * LAMPORTS_PER_SOL);

            await connection.confirmTransaction(transaction);

            const transactionData = {
                fromWallet: fromWalletId,
                toPublicKey,
                amount,
                status: 'completed'
            };
            await this.transactionRepository.create(transactionData);

            return {
                message: 'Transaction successful',
                transactionId: transaction
            };
        } catch (error) {
            throw new Error('Transaction failed: ' + error.message);
        }
    }
}

module.exports = TransactionService;
