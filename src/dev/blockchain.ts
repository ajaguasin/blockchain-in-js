import { Block, Transaction } from './typeDefs';

class Blockchain {
	chain: Block[];
	newTransactions: Transaction[]

	constructor() {
		this.chain = [];
		this.newTransactions = [];
	}

	/**
	 * Creates a new block, clear the new transactions, push the new block into the chain.
	 * @param {number} nonce Proof of work
	 * @param {string} previousBlockHash Data from the previous block hashed into a string
	 * @param {string} hash Data from the new block hashed into a string
	 * @returns {Block} block object
	 */
	createNewBlock(nonce: number, previousBlockHash: string, hash: string): Block {
		const newBlock: Block = {
			index: this.chain.length + 1,
			timestamp: Date.now(),
			transactions: this.newTransactions,
			nonce: nonce,
			hash: hash,
			previousBlockHash: previousBlockHash
		};

		this.newTransactions = [];
		this.chain.push(newBlock);

		return newBlock;
	}

	/**
	 * @returns {Block} The last block of the chain
	 */
	getLastBlock(): Block {
		return this.chain[this.chain.length - 1];
	}

	/**
	 * Creates a transaction object and pushes it into the new transactions array
	 * @param {number} amount Amount that is being sent in this transaction
	 * @param {string} sender A sender's address
	 * @param {string} recipient A recipient's address
	 */
	createNewTransaction(amount: number, sender: string, recipient: string): void {
		const newTransaction = {
			amount: amount,
			sender: sender,
			recipient: recipient
		};

		this.newTransactions.push(newTransaction);
	}
}

export default Blockchain;