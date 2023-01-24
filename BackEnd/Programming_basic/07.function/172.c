#include <stdio.h>

void squre(int n);

int main(int argc, char *argv[])
{
    int n;
    scanf("%d", &n);
    squre(n);

    return 0;
}

void squre(int n)
{
    int i, j;
    for (i = 1; i <=n; ++i) {
        for (j = 1; j <=n; ++j) {
            printf("%d ", i*j);
        }
        printf("\n");
    }
}
