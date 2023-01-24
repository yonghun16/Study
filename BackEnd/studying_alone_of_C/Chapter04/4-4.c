/* 전위 표기와 후위 표기를 사용한 증감 연산 */
// a++ 형태의 증감 연산자는 다른 연산자와 함ㄲ 사용할 때 가장 마지막에 계산한다.

#include <stdio.h>

int main(void)
{
    int a = 5, b = 5;
    int pre, post;

    pre = (++a) * 3;
    post = (b++) * 3;

    printf("초깃값 a = %d, b = %d\n", a, b);
    printf("전위형: (++a) * 3 = %d, 후위형: (b++) * 3 = %d\n", pre, post);

    return 0;
}
