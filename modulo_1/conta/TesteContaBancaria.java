package modulo_1.conta;

public class TesteContaBancaria {
    public static void main(String[] args) {
        
        var contaBancaria = new ContaBancaria();
        contaBancaria.setNumero("34538583");
        contaBancaria.setTitulo("Daniel Freitas");

        contaBancaria.depositar(50);
        contaBancaria.sacar(100);

    }
}   
