package modulo_1.heranca;


public class PrincipalPessoa {
    
    public static void main(String[] args) {

        
        var professor = new Professor();
        professor.setCpf("12345678911");
        professor.setNome("Daniel Freitas"); 
        professor.setIdade(20);
        professor.setSalario(2000);
        System.out.println(professor.imprimirDadosDaPessoa());
        


        var aluno = new Aluno();
        aluno.setCpf("12323845738");
        aluno.setNome("Fernada");
        aluno.setIdade(19);
        aluno.setMatricula("8492382");
        System.out.println(aluno.imprimirDadosDaPessoa());

    
    }
    
}
