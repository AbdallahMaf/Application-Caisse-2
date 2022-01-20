export class Caisse {
    constructor(solde, transactions) {
        this.solde = solde;
        this.transactions = transactions;
    }
    getTransactions() {
        return this.transactions;
    }
    getSolde() {
        return this.solde;
    }
    addTransaction(transaction) {
        this.transactions.push(transaction);
        if (transaction.getType() === 'debit') {
            this.solde -= transaction.getMontant();
        }
        else {
            this.solde += transaction.getMontant();
        }
    }
}
