#include <stdio.h>

void recursive(int n);

int main(int argc, char *argv[])
{
    int n;
    scanf("%d", &n);

    recursive(n);

    return 0;
}

void recursive(int n)
{
    if(n>=1) {
        recursive(n/2);
        printf("%d ", n);
    }
}
