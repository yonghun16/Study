#include <stdio.h>
#include <ctype.h>

#define TEST_STRING	"0xCaFE1234"

int htoi (char s[]);

int main ()
{
    printf("%s is 0x%x.\n", TEST_STRING, htoi(TEST_STRING));

    return 0;
}

int htoi (char s[])
{
    int	i, x, c;

    if (s[0] != '\0' && s[0] == '0' && tolower(s[1]) == 'x')
        i = 2;

    else
        i = 0;

    x = 0;
    for ( ; ; )
        if (isdigit(c = s[i++]))
            x = x * 16 + c - '0';

        else if ((c = tolower(c)) >= 'a' && c <= 'f')
            x = x * 16 + c - 'a' + 10;

        else
            return x;
}
