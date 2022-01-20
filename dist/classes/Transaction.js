export class Transaction {
    constructor(type, montant, person, motif) {
        this.type = type;
        this.montant = montant;
        this.person = person;
        this.motif = motif;
    }
    text() {
        return `${this.montant} ont ete ${this.type === 'credit' ? "deposes" : "retires"} par ${this.person} suite a : ${this.motif}`;
    }
    getMontant() {
        return this.montant;
    }
    getType() {
        return this.type;
    }
}
