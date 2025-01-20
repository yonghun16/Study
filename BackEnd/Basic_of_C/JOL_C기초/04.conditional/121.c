#include <stdio.h>

int main(int argc, char *argv[])
{
    int a;
    scanf("%d", &a);
    if(a > 0) {
        printf("plus");
    }
    else if(a < 0) {
        printf("minus");
    }
    else {
        printf("zero");
    }

    return 0;
}
