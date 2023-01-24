/* 포인터 배열로 여러 개의 문자열 출력 */

#include <stdio.h>

int main(void)
{
    char *pary[5];
    int i;

    pary[0] = "dog";                // 배열 요소에 문자열 대입
    pary[1] = "elephant";
    pary[2] = "horse";
    pary[3] = "tiger";
    pary[4] = "lion";

    for (i = 0; i < 5; i++) {
        printf("%s\n", pary[i]);    // 배열 요소를 사용하여 모든 문자열 출력
    }

    return 0;
}
