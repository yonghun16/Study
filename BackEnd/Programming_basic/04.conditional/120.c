#include <stdio.h>

int main(int argc, char *argv[])
{
    int a, b;
    int res;
    scanf("%d %d", &a, &b);

    res = (a-b > 0)? a-b : b-a;
    printf("%d\n", res);

    return 0;
}

/*
#include <stdio.h>

int main()
{
    int a,b;
    scanf("%d %d", &a, &b);
    if (a>b) printf("%d", a - b);
    else printf("%d", b - a);
}
*/
