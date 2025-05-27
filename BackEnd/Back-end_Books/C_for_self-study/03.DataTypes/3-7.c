/* char 배열에 문자열 복사 */

#include <stdio.h>
#include <string.h>     // 문자열을 다룰 수 있는 string.h 헤더 포함

int main(void)
{
    char fruit[20] = "strawberry";

    printf("%s\n", fruit);
    strcpy(fruit, "banana");  // fruit에 banana 복사
    printf("%s\n", fruit);

    return 0;
}
