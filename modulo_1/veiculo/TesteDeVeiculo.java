package modulo_1.veiculo;

public class TesteDeVeiculo {
    public static void main(String[] args) {
        Veiculo carro = new Carro();
        Veiculo moto = new Moto();

        carro.acelerar();
        carro.freiar();

        moto.acelerar();
        moto.freiar();
    }
    
}
