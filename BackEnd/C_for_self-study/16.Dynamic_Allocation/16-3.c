/* calloc, realloc 함수를 사용한 양수 입력 */

#include <stdio.h>
#include <stdlib.h>

int main(void)
{
    int *pi;            // 할당한 저장 공간을 연결할 포인터
    int size = 5;       // 한 번에 할당한 저장공간의 크기, int형 변수 5개씩
    int count = 0;      // 현재 입력된 양수 개수

    int num;            // 양수를 입력할 변수 
    int i;              // 반복 제어 변수

    pi = (int *)calloc(size, sizeof(int));  // 먼저 5개의 저장 공간 할당
    while (1)
    {
        printf("양수만 입력하세요 => ");
        scanf("%d", &num);
        if (num <= 0) break;            // 0 또는 음수이면 종료
        if (count == size) {            // 저장 공간을 모두 사용하면
            size += 5;                  // 크기를 늘려서 재할당
            pi = (int *)realloc(pi, size * sizeof(int));
        }
        pi[count++] = num;
    }
    for (i = 0; i < count; i++) {
        printf("%5d", pi[i]);
    }
    free(pi);

    return 0;
}
