// 배열의 최대값

#include <stdio.h>
#include <stdlib.h>

int getMax(int data[], int n) {
  int answer = data[0];
  for (int i = 0; i < n; i++) {
    if (answer < data[i]) {
      answer = data[i];
    }
  }

  return answer;
}

int main() {
  int n;
  int *data;

  scanf("%d", &n);
  data = (int *)malloc(sizeof(int) * n);

  for (int i = 0; i < n; i++) {
    scanf("%d", &data[i]);
  }

  int answer = getMax(data, n);

  printf("%d\n", answer);

  free(data);
  return 0;
}
