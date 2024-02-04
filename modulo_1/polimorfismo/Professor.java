package modulo_1.polimorfismo;


public class Professor extends PessoaEntity{
    
    private double salario;

    public double getSalario() {
        return salario;
    }
    public void setSalario(double salario) {
        this.salario = salario;
    }

    String imprimirDadosDaPessoa() {
        System.out.println(super.imprimirDadosDaPessoa()); // super para acessar a classe pai
        return "Você é professor";
    }
}
