import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta {
    //atributo estático:
    static numeroDeConta = 0;
    
    constructor(cliente, agencia) {
        super(0, cliente, agencia);
        ContaCorrente.numeroDeConta += 1; 
    }
    
    //Sobrescrevendo o comportamneto de sacar
    sacar(valor) {
        let taxa = 1.1
        return super._sacar(valor, taxa);
     }

}

   
