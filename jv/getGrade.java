import java.util.ArrayList;
import java.util.List;
import java.util.Arrays;
import static java.util.stream.Collectors.*;


public class getGrade {
 
    public static String filterGrade(String x){ 
       String m = "";   

        if(x.contains("G")){
            if (x.matches("Grade6")){
                m = x;
            }
            else{        
                m = x.replace(""+x.substring(5)+"",""+Integer.toString(Integer.parseInt(x.substring(5))+1)+"");
            }
        }
        else{
            if(x.matches("Kinder2")){
                m = "Grade1";
            }
            else{
                m = "Kinder2";
            }
        }
       return m;
    } 

    private static String test(String func, String expected){
        if(func.equals(expected)){
            expected = "Passed!"+" "+func+"";
        }
        else{
            expected = "Failed!"+" "+"expected "+expected+" but got "+func+" instead";
        }
        return expected;
    }
     
    public static void main(String args[]){

         System.out.println("\n");
         System.out.println(test(filterGrade("Kinder1"), "Kinder2"));
         System.out.println(test(filterGrade("Kinder2"), "Grade1"));
         System.out.println(test(filterGrade("Grade1"),  "Grade2"));
         System.out.println(test(filterGrade("Grade2"),  "Grade3"));
         System.out.println(test(filterGrade("Grade3"),  "Grade4"));
         System.out.println(test(filterGrade("Grade4"),  "Grade5"));
         System.out.println(test(filterGrade("Grade5"),  "Grade6"));

    }
}