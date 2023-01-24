#include <stdio.h> 

int recursive(int n);

int main(int argc, char *argv[])
{
    int n; 
    scanf("%d",&n); 
    n= 8;

    printf("%d",recursive(n)); 

    return 0;
} 

int recursive(int n)
{ 
    if(n<=1) return 1; 
    return recursive(n/2)+recursive(n-1); 
} 
