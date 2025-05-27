/* sizeof 연산자를 사용한 배열 */

#include <stdio.h>

int main(void) {
  int score[5];
  int i;
  int total = 0;
  double avg;
  int count;

  count = sizeof(score) / sizeof(score[0]);  // 배열 요소 개수 계산

  for (i = 0; i < count; i++) {
    scanf("%d", &score[i]);
  }

  for (i = 0; i < count; i++) {
    total += score[i];
  }
  avg = total / (double)count;

  for (i = 0; i < count; i++) {
    printf("%5d", score[i]);
  }
  printf("\n");

  printf("평균 : %.1lf\n", avg);

  return 0;
}
