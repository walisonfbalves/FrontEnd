class Cliente{ // molde que irá receber informações
    nome;
    cpf;
    agencia;
    saldo;
    rg;
}

const cliente1 = new Cliente(); //objetos ou estãncia
const cliente2 = new Cliente();
const cliente3 = new Cliente();


cliente1.nome = "Ricardo";
cliente1.cpf = 11122233309;
cliente1.agencia = 1001;
cliente1.saldo = 0;
cliente1.rg = 123456789;

cliente2.nome= "Alice";
cliente2.cpf = 22244455508;
cliente2.agencia = 1001;
cliente2.saldo = 0;
cliente2.rg = 989876643;

cliente3.nome= "Matheus";
cliente3.cpf = 99955566601;
cliente3.agencia = 1001;
cliente3.saldo = 0;
cliente3.rg = 0943838923;

console.log(cliente1, cliente2, cliente3);

// O que aprendemos nessa aula:

// Criando classes

// O que são atributos

// Instâcia/Objeto

// Operador new