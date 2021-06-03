export class Conta {
    constructor(saldoInicial, cliente, agencia){
    // #saldo = 0 para ficar privado e não conseguir ver no console
        this._saldo = saldoInicial;
        this._cliente = cliente;
        this.agencia = agencia;   
    }

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

    //metodos: sacar, depositar | parametros: valor, conta
     sacar(valor) {
        let taxa = 1;
        return this._sacar(valor, taxa);
            }
        }

    _sacar(valor, taxa) {
        const valorSacado = taxa * valor;
        if(this._saldo >= valorSacado) {
            this._saldo -= valorSacado;
            return valorSacado;
        }   

        return 0;

    }   

     depositar(valor) {
         this._saldo +=valor;
     }
     
     transferir(valor, conta) {
         const valorSacado = this.sacar(valor);
         conta.depositar(valorSacado);
     }

}