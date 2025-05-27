#include <stdio.h>

#define MAXLINE 1000                             /* 최대 입력 행의 길이 */

int get_line(char line[], int maxline);

/* print longest input line */
int main(void)
{
    int len;                                     /* 현재 행의 길이 */
    char line[MAXLINE];                          /* 입력 라인 배열 */

    while((len = get_line(line, MAXLINE)) > 0)   // 입력 받은 행의 길이가 음수가 아니면
        printf("%s = %d\n", line, len);          // 행과 행의 길이를 출력

    return 0;
}

/* get_line: read a line into s, return length */
int get_line(char s[], int lim)
{
    int c, i;                                   // c = current line, i = 행의 길이

    for(i = 0;  i < lim-1 && (c=getchar()) != EOF && c != '\n';  ++i)   // 입력받은 문자가 MAXLINE-1 보다 짧고, EOF가 아니고, 개행이 아니라면 
        s[i] = c;                               // s[i](즉, line[])에 받은 문자를 넣는다. 
    s[i] = '\0';                                // s[i]마지막에 개행문자를 삽입

    return i;                                   // 행의 길이를 반환
}
