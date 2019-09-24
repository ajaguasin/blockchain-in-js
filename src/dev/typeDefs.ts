
export interface Block {
    index: number;
    timestamp: any;
    transactions: Transaction[];
    nonce: number;
    hash: string;
    previousBlockHash: string;
}

export interface Transaction {
    amount: number;
    sender: string;
    recipient: string;
}