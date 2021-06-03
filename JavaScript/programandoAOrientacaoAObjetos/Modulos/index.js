import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrent.js"
import { ContaPoupanca } from "./ContaPoupanca.js";

const cliente1 = new Cliente("Ricardo", 1234567890);

const conta1 = new ContaCorrente( 0, cliente1, 1001);
conta1.depositar(500);
conta1.sacar(100);

const contaPoupanca = new ContaPoupanca(50, cliente1, 1001);
contaPoupanca.sacar(10);

console.log(conta1);
console.log(contaPoupanca);


