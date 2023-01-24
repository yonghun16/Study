/* 변수 값을 인수로 주는 경우 */

#include <stdio.h>

void swap(int x, int y);

int main(void)
{
    int a = 10, b = 20;

    swap(a, b);
    printf("a:%d, b:%d\n", a, b);

    return 0;
}

void swap(int x, int y)
{
    int temp;

    temp = x;  // x,y는 main함수의 a,b와 전혀 다른 변수로 사용됨.
    x = y;
    y = temp;
}
