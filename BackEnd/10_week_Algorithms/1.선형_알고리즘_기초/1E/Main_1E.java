// 1E 합 구학기2

import java.io.*;
import java.lang.*;
import java.util.*;


public class Main_1E {
	public static Scanner scanner = new Scanner(System.in);

	/**
     * 동아리 멤버들의 탑승 가능 여부를 출력하는 함수
     *
     * @param data 각 멤버들의 몸무게 data[0] ~ data[n-1]
     * @param n    멤버들의 수
     * @param p    놀이기구 탑승 가능 체중 제한
     * @param q    놀이기구 최대 하중
     */
	public static void solve(int[] data, int n, int p, int q)
	{
		int S = 0;
		int C = 0;
    boolean able = false;

    for(int i =0; i < n; i+=1) {
      if(data[i] <= p) {
        S += data[i];
        C += 1;
      }
    }

    able = (S <= q);

    if(able) {
      System.out.printf("%d %d\n", C, S);
      System.out.printf("YES");
    }else {
      System.out.printf("%d %d\n", C, S);
      System.out.printf("NO");
    }
	}

	public static void main(String[] args)
	{
		int n = scanner.nextInt();
		int p = scanner.nextInt();
		int q = scanner.nextInt();
		int[] data = new int[n];
		for(int i = 0 ; i < n ; i ++)
		{
			data[i] = scanner.nextInt();
		}

		solve(data, n, p, q);
	}
}
