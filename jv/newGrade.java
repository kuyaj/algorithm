import java.util.ArrayList;
import java.util.List;
import java.util.Arrays;
import static java.util.stream.Collectors.*;


public class newGrade {
 
    public static List<String> list(){

       List<String> list = Arrays.asList(
            "Kinder1",
            "Kinder2",
            "Grade1",
            "Grade2",
            "Grade3",
            "Grade4",
            "Grade5",
            "Grade6"
       );
        
        return list;
    }

    public static List<String> updateGrade(String grade){  
      List<String> basket = new ArrayList<>();
      basket.add(grade);
      return basket;
    }

    public static String filterGrade(String x){ 
        String m = null;   

        for(int i=0; 
                i < list().size(); i++){

            if(x.matches("Grade6")){
                m = list().get(i);
            }
            else if (list().get(i).matches(x)){
            m = list().get(i+1);
         } 
       
     }
       return m;
    }

     
    public static void main(String args[]){

        updateGrade("Grade5").stream().map(x-> filterGrade(x)).forEach(System.out::println);
        updateGrade("Grade4").stream().map(x-> filterGrade(x)).forEach(System.out::println);
        updateGrade("Grade3").stream().map(x-> filterGrade(x)).forEach(System.out::println);
        updateGrade("Grade2").stream().map(x-> filterGrade(x)).forEach(System.out::println);

    }
    
}