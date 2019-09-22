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
	 * @returns {object} block object
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
}
