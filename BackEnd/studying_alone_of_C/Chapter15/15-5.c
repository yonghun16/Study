/* 배열 포인터로 2차원 배열의 값 출력 */

#include <stdio.h>

int main(void)
{
    int ary[3][4] = { {1,2,3,4,}, {5,6,7,8}, {9,10,11,12} };
    int (*pa)[4];      // int형 변수 4개의 배열을 가리키는 배열 포인터
    int i, j;

    pa = ary;
    for (i = 0; i < 3; i++) {
        for (j = 0; j < 4; j++) {
            printf("%5d", pa[i][j]);
        }
        printf("\n");
    }

    return 0;
}
