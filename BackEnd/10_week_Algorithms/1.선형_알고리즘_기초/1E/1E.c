// 1E 합 구하기2

#include <stdio.h>
#include <stdlib.h>

int main() {
  int n, p, q;
  scanf("%d %d %d", &n, &p, &q);

  int *weights = (int*)malloc((sizeof(int)*n));
  int valid_count = 0;  // 탑승 가능한 회원 수
  int total_weight = 0; // 탑승 가능한 회원들의 총 몸무게

  // 각 회원의 몸무게 입력 및 검사
  for (int i = 0; i < n; i++) {
    scanf("%d", &weights[i]);
    if (weights[i] <= p) { // 체중 제한을 넘지 않는 경우
      valid_count++;
      total_weight += weights[i];
    }
  }

  // 결과 출력
  printf("%d %d\n", valid_count, total_weight);

  if (total_weight <= q) {
    printf("YES\n");
  } else {
    printf("NO\n");
  }

  return 0;
}
