#include <stdio.h>

void print(int num, int *p);

int main()
{
	int num, arr[100] ={0,};
	
	scanf("%d",&num);
	print(num, &arr);
	
	return 0;
}

void print(int num, int *p)
{
	int i;
	p[0] = 1;
	p[1] = 2;
	for(i = 2; i<=num; i++)
	{
		p[i] = (p[i-2] * p[i-1])%100;
	}
	
	printf("%d",p[num-1]);
}




/*
#include <stdio.h>

int recursive(int n);

int main(int argc, char *argv[])
{
    int n;
    scanf("%d", &n);

    printf("%d\n", recursive(n));

    return 0;
}

int recursive(int n)
{
    if(n == 1) {
        return 1;
    }
    if(n == 2) {
        return 2;
    }
    else {
        return (recursive(n-1) * recursive(n-2)) % 100;
    }
}
*/
