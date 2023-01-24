/* 주소로 쓰이는 배열명과 배열의 주소 비교 */

#include <stdio.h>

int main(void)
{
    int ary[5];

    printf("  ary의 값 : %u\t", ary);           // 주소로서의 배열명의 값
    printf(" ary의 주소 : %u\n", &ary);         // 배열의 주소
    printf("   ary + 1 : %u\t", ary + 1);       // 4bite 차이
    printf("   &ary + 1 : %u\n", &ary + 1);     // 20bite 차이

    return 0;
}
