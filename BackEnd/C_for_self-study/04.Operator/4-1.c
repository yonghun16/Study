/* 대입, 덧셈, 뺄셈, 곱셈, 음수 연산 */

#include <stdio.h>

int main(void)
{
    int a, b;
    int sum, sub, mul, inv;

    a = 10;     // 대입 연산(=)
    b = 20;     
    sum = a + b;
    sub = a - b;
    mul = a * b;
    inv = -a;   // 음수연산(-) 후 대입연산(=)

    printf("a의 값: %d, b의 값 : %d\n", a, b);
    printf("덧셈 : %d\n", sum);
    printf("뺄셈 : %d\n", sub);
    printf("곱셈 : %d\n", mul);
    printf("a의 음수 연산 : %d\n", inv);

    return 0;
}
