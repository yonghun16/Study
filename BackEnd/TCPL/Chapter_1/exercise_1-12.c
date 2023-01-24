#include <stdio.h>

#define IN  1
#define OUT 0

int main(void) 
{
    int c;
    int state = IN;

    while((c = getchar()) != EOF) {
        if( (c == '\t' || c == ' ') && state == IN)  {
            putchar('\n');
            state = OUT;
        }
        else if( (c == '\t' || c == ' ') && state == OUT) {
            ;
        }
        else {
            putchar(c);
            state = IN;
        }
    }

    return 0;
}
