package modulo_1.veiculo;

public class Carro implements Veiculo {

    @Override
    public void acelerar() {
        System.out.println("Acelerando o carro");
    }

    @Override
    public void freiar() {
       System.out.println("Freiando o carro");
    }
    
}
