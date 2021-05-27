export class ContaCorrente {
    agencia;
    cliente;


    // #saldo = 0 para ficar privado e não conseguir ver no console
    _saldo = 0;
    

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
}
