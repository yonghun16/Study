#include <stdio.h>

int main(int argc, char *argv[])
{
    int n;
    int odd = 0, even = 0;
    
    while(1) {
        scanf("%d", &n);
        if(n == 0) break;
        if(n%2 == 1) odd++;
        else even++;
    }
    printf("odd : %d\n", odd);
    printf("even : %d\n", even);
    
    return 0;
}
