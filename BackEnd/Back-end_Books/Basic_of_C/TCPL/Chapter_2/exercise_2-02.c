/* This is a somewhat simplified rewrite of exercise 1-16. */

#include <stdio.h>
#define MAXLINE	1000

int get_line (char line[], int maxline);

int main ()
{
    int	len;
    int	max;
    char line[MAXLINE];

    max = 0;
    while ((len = get_line(line, MAXLINE)) > 0)
        printf("%s = %d\n", line, len);          // 행과 행의 길이를 출력

    return 0;
}

int get_line (char s[], int lim)

{
    int	c, i;

    /* Logical expressions have value 0 for false or 1 for true, this fact
     * is used to find out if all conditions are true here. 
     */

    for (i = 0; 
            (i < lim - 1) + ((c = getchar()) != EOF) + (c != '\n') == 3;    // 3개의 조건식이 전부 참이면 다 더하면 3의 값이 나온다. 
            i++)
        s[i] = c;

    if (c == '\n') {
        s[i] = c;
        i++;
    }

    s[i] = '\0';

    return i;
}
