#include <stdio.h>
#include <time.h>
#include <stdlib.h>

int main(void) 
{
    srand(time(NULL));     // 난수 초기화
    int num = rand() % 3;  // 0 ~ 2

    printf("%d", num);

    return 0;
}
