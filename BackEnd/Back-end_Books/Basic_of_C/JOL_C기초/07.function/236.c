#include <stdio.h>

int print(int sum);

int main()
{
    int num1,num2,num3;
    int sum=0;
    scanf("%d %d %d", &num1, &num2, &num3);
    sum = num1*num2*num3;
    printf("%d",print(sum));

    return 0;	
}

int print(int sum)
{
    if(sum == 0) return 1;

    int num;
    num = sum % 10;

    if(num==0) num=1;

    sum = sum/10;

    return (num*print(sum));
}

