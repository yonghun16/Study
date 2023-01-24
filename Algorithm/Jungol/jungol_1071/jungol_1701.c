#include <stdio.h>

int main(void) 
{
    int n, m;
    int div_sum = 0, mul_sum = 0;
    scanf("%d", &n);

    int a[40] = { 0, };
    for(int i=0; i<n; i++) {
        scanf("%d", &a[i]);
    }

    scanf("%d", &m);

    for(int i=0; i<n; i++) {
       if(!(m % a[i])) div_sum += a[i];
       if(!(a[i] % m)) mul_sum += a[i];
    }

    printf("%d\n", div_sum);
    printf("%d\n", mul_sum);

    return 0;    
}