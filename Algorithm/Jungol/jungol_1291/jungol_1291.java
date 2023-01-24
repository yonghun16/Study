import java.util.Scanner;

public class jungol_1291 {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);
        int s = sc.nextInt();
        int e = sc.nextInt();

        while ((s < 2 || s > 9) || (e < 2 || e > 9)){
            System.out.println("INPUT ERROR!");
            s = sc.nextInt();
            e = sc.nextInt();
        } // 범위 밖에 있는 숫자 입력 시 다시 입력

        if (s < e) {
            for (int i = 1; i <= 9; i++) {
                for (int j = s; j <= e; j++) {
                    System.out.printf("%d * %d = %2d   ", j, i, (j*i));
                }
                System.out.println();
            }
        } else {
            for (int i = 1; i <= 9; i++) {
                for (int j = s; j >= e; j--) {
                    System.out.printf("%d * %d = %2d   ", j, i, (j*i));
                }
                System.out.println();
            }
        }
    }
}
