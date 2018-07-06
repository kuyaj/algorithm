import java.util.*;
///import code.ConnectModule;
//import code.DisplayModule;

public class fromData {

    fromData(){
       // ConnectModule.Connect();
    }

    public static void main(String [] args){
    
    List<String> toClient = new LinkedList<>();


        String [] fromServer = {
            
            "Arrmie",
            "Zari",
            "Roman",
            "Geoffry"
        };
       

        int i = 0; 
        while(i < fromServer.length){

            toClient.add(fromServer[i]);
        i++;
        }

        toClient.stream().forEach(System.out::println);

        // code.DisplayModule.displayFromDatabase().stream().forEach((x)-> { System.out.println(x);});
    }
}