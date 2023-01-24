import java.util.*;

public class Main529 {
    public static void main(String[] args) {
        int a, b, c;
        Scanner sc = new Scanner(System.in);

        a = sc.nextInt();
        b = sc.nextInt();
        c = b + 100 - a;

        System.out.println(c);
        if ( c>0 ) {
            System.out.println("Obesity");
        }
    }
}
