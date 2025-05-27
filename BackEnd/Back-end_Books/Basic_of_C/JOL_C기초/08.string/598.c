#include <stdio.h>
#include <string.h>

int main(int argc, char *argv[])
{
    char letter;
    do
    {
        scanf(" %c", &letter);
        if ( 'A' <= letter && letter <='z' ){
            printf("%c\n", letter);
        }
        else if ( '0' <= letter && letter <='9' ){
            printf("%d\n", letter);
        }
        else 
            break;
    } while(1);

    return 0;
}
