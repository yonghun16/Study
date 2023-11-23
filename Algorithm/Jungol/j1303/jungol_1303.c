#include <stdio.h>

int main(void) 
{
    int n, m, c=1;

    scanf("%d %d", &n, &m);

    for (int i = 0; i < n; i++) {
        for (int j = 0; j < m; j++) {
            printf("%d ", c++);
        }
        printf("\n"); 
    }
    return 0;
}
