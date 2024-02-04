package modulo_1.primeirasAulas;

public class PrimeiraClasse {
    public static void main(String[] args) {
    int dadoDoTipoInt = 10;
    double dadoDoTipoDouble = 3.14;
    float dadoDoTipoFloat = 3.14f;
    long dadoDoTipoLong = 3543453345L;
    String dadoDoTipoString = "Texto";
    char dadoDoTipoChar = 'C';
    boolean dadoDoTipoBoolean = true;

    if(dadoDoTipoInt == 11) {
        System.out.println("Entou no if");
    } else if(dadoDoTipoInt < 12) {
        System.out.println("Entrou no if do 12");
    } else {
        System.out.println("Entrou no else");
    }

    int valorInicial = 0;
    while(valorInicial < 3) {
        System.out.println("Contando" + valorInicial);
        valorInicial++;
    }

    for(int i = 3; i < 8; i++) {
        System.out.println("Contando" + i);
    }
    System.out.println("Acabou");
    }
}