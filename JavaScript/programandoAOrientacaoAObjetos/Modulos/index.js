import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrent.js"
import {ContaPoupanca} from "./ContaPoupanca";
import {Conta} from "./Conta.js"

const cliente1 = new Cliente("Ricardo", 1234567890);

const conta1 = new Conta(0, 1001, cliente1);
conta1.depositar(500);
conta1.sacar(100);

const contaPoupanca = new Conta(50, cliente1, 1001);

console.log(contaPoupanca);
console.log(conta1);


