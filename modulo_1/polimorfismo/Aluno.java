package modulo_1.polimorfismo;

public class Aluno extends PessoaEntity{
    
    private String matricula;


    public String getMatricula() {
        return matricula;
    }
    public void setMatricula(String matricula) {
        this.matricula = matricula;
    }

    String imprimirDadosDaPessoa() {
        System.out.println(super.imprimirDadosDaPessoa());  // super para acessar a classe pai
        return "Você é aluno";
    }
}
