// 배열의 최대값

import java.util.Scanner;

public class Main_1C {
  public static int getMax(int[] data, int n) {
    int maxValue = data[0];

    for(int i = 0; i < n; i+=1) {
      if( maxValue < data[i]) {
        maxValue = data[i];
      }
    }
    return maxValue;  
  }

  public static void main(String[] args) {
    Scanner scanner = new Scanner(System.in);

    int n= scanner.nextInt();
    int[] data = new int[n];
    for (int i = 0; i < n; i++) {
      data[i] = scanner.nextInt();
    }
    int answer = getMax(data, n);

    System.out.println(answer);
  }
}
