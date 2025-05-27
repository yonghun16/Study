#include <stdio.h>

int main(int argc, char *argv[])
{
    int n;
    while(1) {
        scanf("%d", &n);
        if( n % 3 == 0) {
            printf("%d\n", n/3);
            continue;
        }
        else if ( n == -1) break;
    }   

    return 0;
}
