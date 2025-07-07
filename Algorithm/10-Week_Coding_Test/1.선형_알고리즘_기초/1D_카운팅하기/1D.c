// 1D 카운팅하기

#include <stdio.h>
#include <stdlib.h>

int getCount(int height[], int n, int m, int s) {
  int count = 0;
  for (int i = 0; i < n; i++) {
    if (height[i] == m || height[i] == s) {
      count++;
    }
  }

  return count;
}

int main() {
  int n; // 사람들
  int m; // 미주의 키
  int s; // 지수의 키
  int *height;
  int result = 0;

  scanf("%d %d %d", &n, &m, &s);

  height = (int *)malloc(sizeof(int) * n);

  for (int i = 0; i < n; i++) {
    scanf("%d", &height[i]);
  }

  result = getCount(height, n, m, s);

  printf("%d\n", result);

  return 0;
}
