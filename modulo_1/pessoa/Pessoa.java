package modulo_1.pessoa;

public class Pessoa {

    String nome;
    int idade;
    String cpf;


    void imprimirDadosDaPessoa() {
        System.out.println("Nome: " +nome);
    }

    String imprimirDadosDaPessoa(int indice) {
        return "O nome da pessoa é: " + nome +" A idade dae pessao é: " 
        + idade + " E o documento da pessoa é: " + cpf +" E o idice é " + indice;
    }
}
