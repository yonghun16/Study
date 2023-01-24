#include <stdio.h>

#define MAXLINE 1000    /* maximum input line size */
#define DISPLAY_LINE 80

int get_line(char line[], int maxline);

/* print longest input line */
int main(void)
{
    int len;                /* current line length */
    char line[MAXLINE];     /* current input line */

    while((len = get_line(line, MAXLINE)) > 0) {
        if(len >= DISPLAY_LINE)
            printf("%s = %d\n", line, len);
    }

    return 0;
}

/* get_line: read a line into s, return length */
int get_line(char s[], int lim)
{
    int c, i;

    for(i = 0; i < lim-1 && (c=getchar()) != EOF && c != '\n'; ++i)
        s[i] = c;

    s[i] = '\0';

    return i;
}
