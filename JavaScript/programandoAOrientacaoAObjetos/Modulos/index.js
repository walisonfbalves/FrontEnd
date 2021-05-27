import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrent.js"

const cliente1 = new Cliente("Ricardo", 1234567890);
const cliente2 = new Cliente("Alice", 9323884921);


const conta1 = new ContaCorrente (1001, cliente1);
const conta2 = new ContaCorrente(1002, cliente2);


console.log(conta1, conta2);


