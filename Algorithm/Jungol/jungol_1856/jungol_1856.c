#include <stdio.h>

int main (void)
{
    int n, m, c=1;
    int i, j;

    scanf("%d %d", &n, &m);

    for (i = 1; i <= n; i++) {
        if(i % 2) {  // 홀수 열
            for (j=c; j < c+m; j++) {
                printf("%d ", j);
            }
            c = j;
        }
        else {  // 짝수 열
            for (j=(c-1)+m; j > c-1; j--) {
                printf("%d ", j);
            }
            c = ((c-1)+m)+1;
        }
        printf("\n");
    }

    return 0;
}