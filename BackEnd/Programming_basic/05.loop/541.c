#include <stdio.h>

int main(int argc, char *argv[])
{
    char a;
    scanf("%c", &a);
    for (int i = 0; i < 20; ++i) {
        printf("%c", a);
    }
    return 0;
}
