#include <stdio.h>

int re(int n);

int main(int argc, char *argv[])
{
    int n;
    scanf("%d",&n);
 
    printf("%d\n",re(n));

    return 0;
}

int re(int n)
{
    static int i; 
    
    if(n==1) return i;

    if(n%2==0)
    {   
        i++;
        return re(n/2);
    }
    else
    {
        i++;
        return re(n/3);
    }
}
