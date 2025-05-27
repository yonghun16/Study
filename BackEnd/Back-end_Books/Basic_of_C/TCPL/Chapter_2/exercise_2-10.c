#include <stdio.h>

int lower (int c)
{
	return c>='A' && c<='Z'  ?  c+'a'-'A'  :  c;
}

int main (void)
{
	int	c, d;

	c = 'X';
	d = 'd';

	printf("lower('%c') = '%c'\n", c, lower(c));
	printf("lower('%c') = '%c'\n", d, lower(d));

	return 0;
}
