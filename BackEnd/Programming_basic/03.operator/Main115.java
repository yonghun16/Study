import java.util.*;

public class Main115 {
    public static void main(String[] args) {
        int a_height, a_weight;
        int b_height, b_weight;

        Scanner sc = new Scanner(System.in); 

        a_height = sc.nextInt();
        a_weight = sc.nextInt();
        b_height = sc.nextInt();
        b_weight = sc.nextInt();

        if( (a_height > b_height) && (a_weight > b_weight)) {
            System.out.println("1");
        }
        else {
            System.out.println("0");
        }
    }
}
