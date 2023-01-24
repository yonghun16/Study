#include <stdio.h>

int main(int argc, char *argv[])
{
    int a, b, c;    
    int min;

    scanf("%d %d %d", &a, &b, &c);
    min = (a < b)? a : b;
    min = (min < c)? min : c;

    printf("%d\n", min);
    return 0;
}


/*
#include <stdio.h>

int main(int argc, char *argv[])
{
    int a, b, c;
    int min;
    scanf("%d %d %d", &a, &b, &c);

    min = ( (a < b) && (a < c) )? a : 
          ( (b < c) && (b < a) )? b : 
          c;
    
    printf("%d\n", min);

    return 0;
}
*/
