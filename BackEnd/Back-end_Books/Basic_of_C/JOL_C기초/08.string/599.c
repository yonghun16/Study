#include <stdio.h>
#include <string.h>

int main(int argc, char *argv[])
{
    char string[100] = { '\0', };
    char output[100] = { '\0', };
    int count = 0;
    int i;

    scanf("%s", string);

    for (i = 0; i < strlen(string); i++) {
       if ( ('A' <= string[i]) && (string[i] <= 'Z')) {
           output[count] = string[i];
           count++;
       } 
       else if ( ('a' <= string[i]) && (string[i] <= 'z')) {
           output[count] = string[i] - 'a' + 'A';
           count++;
       }
    }

    printf("%s\n", output);

    return 0;
}
