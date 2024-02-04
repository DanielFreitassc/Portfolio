package modulo_1.conta;

public class ContaBancaria {
    
    private String numero;
    private String titulo;
    private double saldo;

    public ContaBancaria() {
        this.saldo = 100;
    }

    public String getNumero() {
        return numero;
    }
    public void setNumero(String numero) {
        this.numero = numero;
    }
    public String getTitulo() {
        return titulo;
    }
    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }
    public double getSaldo() {
        return saldo;
    }
    
    
    void depositar(double valor) {
        if(valor > 0) {
            saldo = saldo + valor;
            System.out.println("Deposito de R$" + valor +". Saldo atual R$" +saldo);
        } else {
            System.out.println("O valor de depósito é inálido");
        }
    }

    void sacar(double valor) {
        if(valor > 0 && valor <= saldo) {
            saldo = saldo - valor;
            System.out.println("Saque de R$" +valor+". Saldo atual R$"+saldo);
        } else {
            System.out.println("Saldo insuficiente");
        }
    }    
}