# include <stdio.h>

int main()
{
	char a,b;
	scanf("%c %c",&a,&b);
	
	if(a>b)
	{
		printf("%d %d",a+b,a-b);		
	}
	else
		printf("%d %d",a+b,b-a);

    return 0;
}

