package modulo_1.primeirasAulas;

import java.util.HashSet;
import java.util.Set;

public class ColecaoHashSet {
    public static void main(String[] args) {
        Set<Integer> numeros = new HashSet<>();
        numeros.add(10);
        numeros.add(11);
        numeros.add(12);
        numeros.add(13);

        System.out.println(numeros.size());

        numeros.remove(13);
        numeros.add(15);
        

        for(Integer elemento : numeros) {
            System.out.println(elemento);
        }

        System.out.println("Tem o numero 15 ? " +numeros.contains(15));
        
        if(numeros.contains(15)) {
            System.out.println("Sim");
        }else {
            System.out.println("Não");
        }
        

    }
}
