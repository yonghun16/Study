#include <stdio.h>

int main(int argc, char *argv[])
{
    int i, n;
    int m3 = 0, m5 = 0;
    for (i = 0; i < 10; ++i) {
        scanf("%d", &n);
        if (n % 3 == 0) {
            m3++;
        }
        if (n % 5 == 0) {
           m5++; 
        }
    }
    printf("Multiples of 3 : %d\n", m3);
    printf("Multiples of 5 : %d\n", m5);
    
    return 0;
}
