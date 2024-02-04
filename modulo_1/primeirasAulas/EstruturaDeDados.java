package modulo_1.primeirasAulas;

import java.util.ArrayList;
import java.util.List;

public class EstruturaDeDados {
    
    public static void main(String[] args) {
    List<String> nomes = new ArrayList<>();
    nomes.add("Daniel");
    nomes.add("Freitas");
    System.out.println(nomes.get(0));

    //Percorre a lista de nome e printa cada nome
    for(String nome : nomes) {
        System.out.println("For Nome: " + nome);
    }
    
    // Lambda
    nomes.forEach(nome -> System.out.println("Lambda Nome:"+ nome));
    
    // outro metodo de usar o forEch para printar os itens da lista sem mensagem
    nomes.forEach(System.out::println);
   }
}
