#include <stdio.h>

int main(int argc, char *argv[])
{
    int n;
    int i;
    char a[100][100];
    scanf("%d", &n);

    for(i=0; i<=n; i++) {
        fgets(a[i], 100, stdin);
    }

    for(i=n; i>0; i--) {
        fputs(a[i], stdout);
        fputs("\n", stdout);
    }

    return 0;
}
