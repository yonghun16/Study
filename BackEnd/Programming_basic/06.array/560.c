#include <stdio.h>

int main(int argc, char *argv[])
{
    int min = 1000;
    int i, n;

    for(i=0; i<10; i++) {
        scanf("%d", &n);
        if(n < min) {
            min = n;
        }
    }

    printf("%d\n", min);

    return 0;
}
