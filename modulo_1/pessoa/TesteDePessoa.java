package modulo_1.pessoa;

public class TesteDePessoa {
    
    public static void main(String[] args) {
        var pessoa1 = new Pessoa();
        pessoa1.cpf = "12345678911";
        pessoa1.nome = "Daniel Freitas"; 
        pessoa1.idade = 20;

        System.out.println(pessoa1.nome);
        System.out.println(pessoa1.imprimirDadosDaPessoa(1));


        var pessoa2 = new Pessoa();
        pessoa2.cpf = "94938949";
        pessoa2.nome = "Luiz zomer";
        pessoa2.idade = 19;

        System.out.println(pessoa2.nome);
        System.out.println(pessoa2.imprimirDadosDaPessoa(2));
        pessoa1.imprimirDadosDaPessoa();

       

    }
    
}
