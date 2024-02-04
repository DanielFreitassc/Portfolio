package modulo_1.primeirasAulas;

import java.util.HashMap;
import java.util.Map;

public class Colecoes {
    public static void main(String[] args) {
        Map<String, Integer> notas = new HashMap<>();
        notas.put("Daniel", 8);        
        notas.put("Luiz",10);
        notas.put("Eduardo", 9);

        var nota = notas.get("Daniel");
        System.out.println(nota);

        for(Map.Entry<String,Integer> entry : notas.entrySet()) {
            String key = entry.getKey();
            Integer value = entry.getValue();

            System.out.println("A chave é " + key + "O valor é " + value);
        }

    }
}
