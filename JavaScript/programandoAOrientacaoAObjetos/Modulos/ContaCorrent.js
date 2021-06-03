import { Cliente } from "./Cliente.js";
import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta {
    //atributo estático:
    static numeroDeConta = 0;
    
    constructor(cliente, agencia) {
        super(0, cliente, agencia);
        ContaCorrente.numeroDeConta += 1; 
    }

    sacar(valor) {
        let taxa = 1.1
        const valorSacado = taxa * valor;
        if(this._saldo >= valorSacado) {
            this._saldo -= valorSacado;
            return valorSacado;
            }
        }

    teste() {
        super.teste();
        console.log("Teste na classe conta corrente")
    }
    
}

   
