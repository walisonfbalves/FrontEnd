import { Cliente } from "./Cliente.js";

export class ContaCorrente {
    //atributo estático:
    static numeroDeConta = 0;
    //atributos
    agencia;
    _cliente;
     // #saldo = 0 para ficar privado e não conseguir ver no console
     _saldo = 0;


    // acessores: set e get de proteção
    set cliente (novoValor){
        if(novoValor instanceof Cliente){
            this._cliente = novoValor;
        }
    }

    get cliente() {
        return this._cliente;
    }

    get saldo() {
        return this._saldo;
    }
   
    constructor(agencia, cliente) {
        this.agencia = agencia;
        this.cliente = cliente;
        ContaCorrente.numeroDeConta += 1;
        
    }
    
  
    //metodos: sacar, depositar | parametros: valor, conta
    sacar(valor){
        if(this._saldo >= valor){
            this._saldo -= valor;
            return valor;
        }
    }

    depositar(valor){
        if (valor <= 0 )
        {
            return;
        }

        this._saldo +=valor;
    }

    transferir(valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}


