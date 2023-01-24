#include <stdio.h>
#include <stdlib.h>

int main(int argc, char *argv[])
{
    int odd = 0;
    int even = 0;
    int *a = (int *)malloc(sizeof(int)*10);

    for (int i = 0; i < 10; i++) {
        scanf("%d", a+i);
        if(*(a+i)%2 == 1) {
            odd++;
        }else{
            even++;
        }
    }

    printf("odd : %d\n", odd);
    printf("even : %d\n", even);

    return 0;
}
