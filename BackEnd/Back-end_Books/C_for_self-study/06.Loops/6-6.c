/* continue문 */

#include <stdio.h>

int main(void)
{
    int i;
    int sum = 0;

    for(i=1; i<=100; i++) {
        if((i%3) == 0) {
            continue;  // i가 3의 배수이면 sum += i 문장을 건너뛰고 다음 loop
        }
        sum += i;
    }

    printf("sum = %d\n", sum);

    return 0;
}

