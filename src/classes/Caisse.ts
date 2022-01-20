import {Transaction} from './Transaction.js'

export class Caisse{
    constructor(
        private solde: number, 
        private transactions: Transaction[]
    ){}

    getTransactions(){
        return this.transactions
    }

    getSolde(){
        return this.solde
    }

    addTransaction(transaction:Transaction){
        this.transactions.push(transaction)
        if (transaction.getType() ==='debit'){
            this.solde -= transaction.getMontant() 
        }
        else{
            this.solde += transaction.getMontant()
        }
    }
}
