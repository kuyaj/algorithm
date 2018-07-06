import java.util.List;
import java.util.LinkedList;

class grocery {

    static String [] groceries = {
        "apple",
        "banana",
        "orange",
        "strawberries",
        "cherries"
    };
    static List<String> basket = new LinkedList<>();

    private static void get_groceries(){
        for(String i: groceries){
           if(!basket.contains(i)){
               basket.add(i);
           }
        }
        System.out.println(basket);
    }



    public static void main(String args[]){
        get_groceries();
    }
}