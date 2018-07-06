import java.util.LinkedList;
import java.util.List;
import java.util.function.*;


public class func {
    public static void main(String args []){
        
        List<Integer> water = new LinkedList<>();
        
        Function<Integer,Integer,Integer> add = a -> b -> a += b;
        Integer air = add.apply(4,5);
        
        water.add(air);
        water.stream().forEach((y)-> System.out.println(y));

        BinaryOperator<Integer> sum = (a,b) -> a + b;

        Integer res = sum.apply(1,2); 

        System.out.println(res);
    }
}