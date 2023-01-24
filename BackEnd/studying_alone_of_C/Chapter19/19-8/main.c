/* 두 평균을 구하는 프로그램 */
/* main 함수 정의 */

#include <stdio.h>

void input_data(int *, int *);      // 두 정수를 입력하는 함수 선언
double average(int, int);           // 평균을 구하는 함수 선언

int main(void)
{
    int a, b;
    double avg;

    input_data(&a, &b);             // 두 정수 입력
    avg = average(a, b);            // 평균 계산
    printf("%d와 %d의 평균 : %.1lf\n", a, b, avg);  // 입력값과 평균 출력

    return 0;
}
