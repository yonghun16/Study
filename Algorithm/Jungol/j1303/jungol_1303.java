import java.util.Scanner;

public class jungol_1303 {
    public static void main(String[] args) {
        int n, m, c=1;

        Scanner sc = new Scanner(System.in);
        n = sc.nextInt();
        m = sc.nextInt();

        for (int i = 0; i < n; i++) {
            for (int j = 0; j < m; j++) {
                System.out.printf("%d ", c++);
            }
            System.out.println();
        }
    }
}
