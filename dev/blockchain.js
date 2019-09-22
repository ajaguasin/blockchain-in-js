/**
 * @typedef {object} Block
 * @property {number} index The index
 * @property {Date} timestamp The Date of when the block was created
 * @property {Block[]} transactions Instance's array of new transactions
 * @property {number} nonce Proof of work
 * @property {string} hash Data from the new block hashed into a string
 * @property {string} previousBlockHash Dta from the new block hashed into a string
 */

class Blockchain {
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
	createNewBlock(nonce, previousBlockHash, hash) {
		const newBlock = {
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
	getLastBlock() {
		return this.chain[this.chain.length - 1];
	}
}

module.exports = Blockchain;
