#include <stdio.h>
#define N 7

int main(void)
{
    int a[N];
    int i, j;
    for( i=0; i<N; i++ ){
        scanf("%d", &a[i]);
    }
    for( i=N-1; i>=N-3; i-- ){
        for( j=0; j<N-1; j++ ){
            if( a[j] > a[j+1] ){
                int tmp = a[j];
                a[j] = a[j+1];
                a[j+1] = tmp;
            }
        }
    }
    for( i=0; i<N; i++ ){
        printf("%d ", a[i]);
    }

    return 0;
}
