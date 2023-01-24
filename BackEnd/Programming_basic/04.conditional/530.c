#include <stdio.h>

int main(int argc, char *argv[])
{
    int age;
    scanf("%d", &age);

    if(age > 20){
        printf("adult");
    } else {
        printf("%d years later\n", 20-age);
    }
    return 0;
}
