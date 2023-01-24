#include <stdio.h>

void detab (int n);

int main(void)
{
    detab(4);

    return 0;
}

void detab (int n)
{
    int	column, c;

    column = 0;
    while((c = getchar()) != EOF) {
        if(c == '\t')
            do {
                putchar('@');
                column++;
            } while(column % n);
        else {
            putchar(c);
            column = 0;
        }
    }
}
