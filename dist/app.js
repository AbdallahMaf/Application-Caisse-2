import { Caisse } from "./classes/Caisse.js";
import { Transaction } from "./classes/Transaction.js";
const form = document.querySelector(".transaction");
let maCaisse = new Caisse(1000, []);
const type = document.querySelector("#type");
const montant = document.querySelector("#montant");
const person = document.querySelector("#person");
const motif = document.querySelector("#motif");
const ol = document.querySelector("ol");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let maTransaction = new Transaction(type.value, montant.valueAsNumber, person.value, motif.value);
    maCaisse.addTransaction(maTransaction);
    render(maTransaction, ol);
});
const render = (tr, container) => {
    let li = document.createElement("li");
    let h4 = document.createElement("h4");
    let p = document.createElement("p");
    h4.innerText = tr.getType() === 'debit' ? "Debit" : "Credit";
    h4.className = tr.getType();
    li.className = tr.getType();
    p.innerText = tr.text();
    li.append(h4);
    li.append(p);
    container.append(li);
};
