/* 매개변수가 없는 함수 */

#include <stdio.h>

int get_num(void);

int main(void) {
    int result;

    result = get_num();
    printf("반환값 : %d\n", result);
    
    return 0;
}

int get_num(void)
{
    int num;

    printf("양수 입력 : ");
    scanf("%d", &num);

    return 0;
}
