#include <stdio.h>

int main (void)
{
    int n, m;
    int i, j, c;
    scanf("%d %d", &n, &m);

    switch(m) {
        case 1 :
        for ( i = 1; i <= n; i++) {
            for ( j = 1; j <= n; j++) {
                printf("%d ", i);
            }
            printf("\n");
        }
        break;
        case 2 :
        for ( i = 1; i <= n; i++) {
            if(i%2) {
                for ( j = 1; j <= n; j++) { 
                    printf("%d ", j);
                }
                printf("\n");
            }
            else {
                for ( j = n; j >= 1; j--) {
                    printf("%d ", j);
                }
                printf("\n");
            }
        }
        break;
        case 3 :
        for ( i = 1; i <= n; i++) {
            c = 0;
            for ( j = 0; j < n; j++) {
                printf("%d ", c=c+i);
            }
            printf("\n");
        }
        
        break;
    }
    return 0;
}