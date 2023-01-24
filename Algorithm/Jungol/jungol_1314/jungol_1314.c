#include <stdio.h>

int main(void) 
{
    int n;
    int i, j;
    int c=0;
    int a[100][100]; 
    scanf("%d", &n);
    
    for(i=0; i<n; i++) {
        if(!(i%2)) {
            for (j=0; j<n; j++) {
                a[i][j] = 'A' + c++;
                if(a[i][j]> 'Z') {
                    a[i][j] = 'A';
                    c = 1;
                }
            }
        }
        else {
            for (j=n-1; j>=0; j--) {
                a[i][j] = 'A' + c++;
                if(a[i][j]> 'Z') {
                    a[i][j] = 'A';
                    c = 1;
                }
            }
        }
    }

    for(i=0; i<n; i++) {
        for (j=0; j<n; j++) {
            printf("%c ", a[j][i]);
        }
        printf("\n");
    }

    return 0;
}