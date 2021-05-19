class Cliente{ 
    nome;
    cpf;
    rg;
}

class ContaCorrente {
    agencia;
    // #saldo = 0 para ficar privado e não conseguir ver no console
    _saldo = 0;

    sacar(valor){
        if(this._saldo >= valor){
            this._saldo -= valor;
        }
    }

    depositar(valor){
        if (valor > 0 ){
            this._saldo +=valor;
        }
    }
}


const cliente1 = new Cliente();
cliente1.nome = "Ricardo";
cliente1.cpf = 11122233309;
cliente1.rg = 123456789;

const ContaCorrenteRicado = new ContaCorrente ();
ContaCorrenteRicado.agencia = 1001;

ContaCorrenteRicado.depositar(100);
ContaCorrenteRicado.depositar(100);
ContaCorrenteRicado.depositar(100);

ContaCorrenteRicado.sacar(50);

console.log(ContaCorrenteRicado);

const cliente2 = new Cliente();
cliente2.nome= "Alice";
cliente2.cpf = 22244455508;
cliente2.rg = 989876643;

const cliente3 = new Cliente();
cliente3.nome= "Matheus";
cliente3.cpf = 99955566601;
cliente3.rg = 0943838923;