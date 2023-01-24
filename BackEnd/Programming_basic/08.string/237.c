#include <stdio.h>
#include <string.h>

int main(void)
{
    int a;
    double b;
    char c[30], result[100];
    scanf("%d %lf %s", &a, &b, c);
    sprintf(result, "%d%.3lf%s", a, b, c);
    int i;
    for(i=0; result[i]!=0; i++){
        printf("%c", result[i]);
        if(i==(int)((strlen(result)-1)/2)) printf("\n");
    }

    return 0;
}
