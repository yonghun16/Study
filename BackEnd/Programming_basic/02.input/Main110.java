import java.util.*;

public class Main110 {
    public static void main(String[] args) {
        double a;

        Scanner sc = new Scanner(System.in);

        System.out.print("yard? ");
        a = sc.nextDouble();

        System.out.printf("%.1fyard = %.1fcm", a, a*91.44);
    }
}
