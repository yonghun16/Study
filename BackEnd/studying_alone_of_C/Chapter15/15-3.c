/* 포인터 배열의 값을 출력하는 함수 */

#include <stdio.h>

void print_str(char **pps, int cnt);

int main(void)
{
    char *ptr_ary[] = { "eagle", "tiger", "lion", "squirrel" };    // 초기화
    int count;

    count = sizeof(ptr_ary) / sizeof(ptr_ary[0]);
    print_str(ptr_ary, count);

    return 0;
}

void print_str(char **pps, int cnt)
{
    int i;

    for (i = 0; i < cnt; i++) {
        printf("%s\n", pps[i]);        
    }
}
