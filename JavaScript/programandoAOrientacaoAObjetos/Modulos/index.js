import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrent.js"

const cliente1 = new Cliente();
cliente1.nome = "Ricardo";
cliente1.cpf = 11122233309;
cliente1.rg = 123456789;

const cliente2 = new Cliente();
cliente2.nome= "Alice";
cliente2.cpf = 22244455508;
cliente2.rg = 989876643;

const cliente3 = new Cliente();
cliente3.nome= "Matheus";
cliente3.cpf = 99955566601;
cliente3.rg = 943838923;


const ContaCorrenteRicado = new ContaCorrente ();
ContaCorrenteRicado.agencia = 1001;
ContaCorrenteRicado.cliente = cliente1;

console.log(ContaCorrenteRicado);

const conta2 = new ContaCorrente();
conta2.agencia = 1002;
conta2.cliente = cliente2;

console.log(conta2);


