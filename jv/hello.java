import java.util.*;



class hello{


    
    public static String greet(List<String> names){


     String greeting = names
            .stream()
            .map(name -> name + "\t")
            .reduce("\nNames : ", (header, name) -> header + name);
    return greeting;

     }

    public static void main(String args[])
    {
        List<String> xname = new LinkedList<>();

        xname.add("Christopher");
        xname.add("Alexa Chris");
        xname.add("Jashawm Lauron");
        xname.add("Someone");
        xname.add("Sometwo");
        xname.add("Three");

        System.out.println(greet(xname)+"\n");
    }
}