class Cliente{ 
    nome;
    cpf;
    rg;
}

class ContaCorrent {
    agencia;
    saldo;
    
}


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
cliente3.rg = 0943838923;


const ContaCorrentRicado = new ContaCorrent();
ContaCorrentRicado.agencia = 1001;
ContaCorrentRicado.saldo = 0;
console.log(ContaCorrenteRicado.saldo);

ContaCorrenteRicado.saldo = 100;
console.log(ContaCorrenteRicado.saldo);

let valorSacado = 200;
if(ContaCorrenteRicado.saldo >= valorSacado){
    ContaCorrentRicado.saldo -= valorSacado;
}
console.log(ContaCorrenteRicado);



console.log(cliente1);
console.log(cliente2);
console.log(cliente3);

