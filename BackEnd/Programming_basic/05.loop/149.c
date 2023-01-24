#include <stdio.h>

int main(int argc, char *argv[])
{
    int n, i, c=1;
    scanf("%d", &n);

    for (i = 1; i <= n*n; i++) {
        printf("%d ", c);
        c = (c+2)%10;
        if (i % n == 0) {
            printf("\n");
        }
    }
    return 0;
}
