import java.util.function.*;
import java.util.*;
import static java.util.stream.Collectors.*;

class Pong {            

    static class Student {
        public Student(String a, Integer b, String c){

            this.name = a;
            this.age = b;
            this.gender = c;

        }
        public String getName(){
            return this.name;
        }

        public Integer getAge(){
            return this.age;
        }

        public String getGender(){
            return this.gender;
        }

        private String a;
        private Integer b;
        private String c;
    }

    
//     static List<String> ls = ArrayList<>();

//     public static Predicate<ls> numberFiveOnly() {
//     return x -> x.matches("Five");
//    }

    public static void main(String args[]){
        
        Student student = new Student("Angelo", 21, "Male");

        System.out.println(student.getAge());
        System.out.println(student.getName());
        System.out.println(student.getGender());

            // ls.stream().filter(Predicate<ls>numberFiveOnly).collect(toList()).forEach(System.out::println);
    }

}
