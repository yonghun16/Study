// 배열의 최대값

import java.util.Scanner;

public class MaxNumberFinder {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // 첫 번째 줄에서 숫자의 개수 N을 읽음
        int N = scanner.nextInt();
        scanner.nextLine();  // 줄바꿈 문자 제거

        // 두 번째 줄에서 N개의 정수를 읽음
        String[] numbersStr = scanner.nextLine().split(" ");

        // 문자열 배열을 정수 배열로 변환
        int[] numbers = new int[N];
        for (int i = 0; i < N; i++) {
            numbers[i] = Integer.parseInt(numbersStr[i]);
        }

        // 가장 큰 숫자를 찾기
        int maxNumber = numbers[0];
        for (int i = 1; i < N; i++) {
            if (numbers[i] > maxNumber) {
                maxNumber = numbers[i];
            }
        }

        // 결과 출력
        System.out.println(maxNumber);

        // 스캐너 닫기
        scanner.close();
    }
}
