#include <stdio.h>

int main(int argc, char *argv[])
{
    int i, j, n, c=0;
    scanf("%d", &n);

    for (i = 0; i < n; ++i) {
        for (j = 0; j < n-i; j++) {
            printf("%c", 65+c);
            c++;
        }
        printf("\n");
    }

    return 0;
}
