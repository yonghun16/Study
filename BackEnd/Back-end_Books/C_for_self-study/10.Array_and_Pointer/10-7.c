/* 배열에 값을 입력하는 함수 */

#include <stdio.h>

void input_ary(double *pa, int size);
double find_max(double *pa, int size);

int main(void)
{
    double ary[5];
    double max;                                 // 최댓값을 저장할 변수
    int size = sizeof(ary) / sizeof(ary[0]);    // 배열의 요소의 개수 계산

    input_ary(ary, size);                       // 배열의 값 입력
    max = find_max(ary, size);                  // 배열의 최댓값 반환
    printf("배열의 최댓값 : %.1lf\n", max);

    return 0;
}

void input_ary(double *pa, int size)            // double 포인터를 매개변수로 선언
{
    int i;

    printf("%d개의 실수값 입력 : ", size);
    for(i = 0; i < size; i++)                   // size의 값에 따라 반복 횟수 결정
    {
        scanf("%lf", pa + i);                   // &pa[i]도 가능, 입력할 배열 요소의 주소를 전달
    }
}

double find_max(double *pa, int size)
{
    double max;
    int i;

    max = pa[0];
    for (i = 1; i < size; i++)
    {
        if (pa[i] > max) max = pa[i];
    }

    return max;
}
