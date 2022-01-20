export class Transaction {
    constructor(
        private type: string,
        private montant: number,
        private person: string,
        private motif: string
    ) {}

    text(){
        return `${this.montant} ont ete ${this.type === 'credit' ? "deposes" : "retires"} par ${this.person} suite a : ${this.motif}`
    }

    getMontant(){
        return this.montant;
    }

    getType(){
        return this.type;
    }
}