/* unsigned를 잘못 사용한 경우 */

#include <stdio.h>

int main(void)
{
    unsigned int a, b;

    a = 4294967295;     // 큰 양수 저장
    printf("%d\n", a);  // %d로 출력 ->  -1 출력
    a = -1;             // 음수 저장 
    printf("%u\n", a);  // %u로 출력 ->  4294967295 출력

    b = 4294967295;     // 큰 양수 저장
    printf("%u\n", b);  // %u로 출력 -> 옳바른 출력

    return 0;
}
