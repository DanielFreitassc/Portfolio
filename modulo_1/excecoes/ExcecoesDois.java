package modulo_1.excecoes;

import modulo_1.heranca.PessoaEntity;
import modulo_1.pessoa.Pessoa;

public class ExcecoesDois {

    // Checked exceptions

    //Unchecked exceptions

    public static void main(String[] args){

     PessoaEntity p = null;
     p.getCpf();
        
    }

    public static void validarNumero() throws Exception{
        int numero = 10;
        if(numero < 100) {
            throw new Exception("O número é menor que 100");
        }
    }
}
