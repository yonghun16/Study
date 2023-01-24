#include <stdio.h>

int main(int argc, char *argv[])
{
    int a;
    scanf("%d", &a);

    for(int i=1; i<=a; i++) {
        if(i%2 == 0) printf("%d ", i);
    }

    return 0;
}
