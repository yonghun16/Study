#include <stdio.h>

int main(void)
{
    char s;
    int age;
    scanf("%c %d", &s, &age);

    if (s == 'F' && age >= 18) printf("WOMAN");
    if (s == 'F' && age < 18) printf("GIRL");
    if (s == 'M' && age >= 18) printf("MAN");
    if (s == 'M' && age < 18) printf("BOY");

    return 0;
}
