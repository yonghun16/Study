#include <stdio.h>

int main(int argc, char *argv[])
{
    char array[10];
    for(int i=0; i<10; i++) {
        scanf(" %c", &array[i]);
    }
    for(int i=0; i<10; i++) {
        printf("%c", array[i]);
    }
    return 0;
}
