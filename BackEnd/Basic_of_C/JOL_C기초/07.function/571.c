#include <stdio.h>

void output();

int main(int argc, char *argv[])
{
    int n, i;
    scanf("%d", &n);
    
    for (i = 0; i < n; ++i) {
        output();
    }

    return 0;
}

void output()
{
    printf("~!@#$^&*()_+|\n");
}
