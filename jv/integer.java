import java.util.*;
import static java.util.stream.Collectors.*;


class integer{

    static int timestwo(int x){
       return x *= 3;
    }
    public static void main(String [] args){
        List<Integer> values = Arrays.asList(1,2,3,4,5,6,7,8);
        values.stream().map((x) -> { return timestwo(x);}).collect(toList()).forEach(System.out::println);
    }
}