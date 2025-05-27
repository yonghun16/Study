#include <stdio.h>

void recursive(int a);

int main(int argc, char *argv[])
{
    int n;
    scanf("%d", &n);

    recursive(n);
    
    return 0;
}
void recursive(int a)
{
    if(a >0) {
        printf("%d ", a);
        recursive(a-1);
    }
}
