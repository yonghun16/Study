#include <stdio.h>
#include <stdlib.h>

void intro()
{
    FILE *fp;
    char ch;

    fp = fopen("data/intro_pic.txt", "r");
    if (fp == NULL) {
        printf("파일이 열리지 않았습니다. \n");
    }

    while(1) {
        ch = fgetc(fp); 
        if (ch == EOF) {
            break;
        }
        putchar(ch);
    }
    fclose(fp);
}
