/* 정올 1341:구구단2 */

import java.util.Scanner;

public class jungol_1341 {
    public static void main(String[] args) {
        int s, e, i;
        Scanner sc = new Scanner(System.in);
        s = sc.nextInt();
        e = sc.nextInt();

        if(s <= e){
            while(s <= e){
                for(i=1; i<=9; i++){
                    System.out.printf("%d * %d = %2d   ", s, i, s*i);
                    if(i%3 == 0) System.out.printf("\n");
                }
                System.out.println();
                s += 1;
            }
        }
        else if(s > e){
            while(s >= e){
                for(i=1; i<=9; i++){
                    System.out.printf("%d * %d = %2d   ", s, i, s*i);
                    if(i%3 == 0) System.out.printf("\n");
                }
                System.out.println();
                s -= 1;
            }
        }
    }
}
