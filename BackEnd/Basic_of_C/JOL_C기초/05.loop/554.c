#include <stdio.h>

int main(int argc, char *argv[])
{
    int i, j, n, c=1, d=65;
    scanf("%d", &n);

    for (i = n; i > 0; i--) {
        for (j = 0; j < i; j++) {
           printf("%d ", c++); 
        }
        for (j = 0; j <= n-i; j++) {
            printf("%c ", d++);
        }
        printf("\n");
    }
    return 0;
}
