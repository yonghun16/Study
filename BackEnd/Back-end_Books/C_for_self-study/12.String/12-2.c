/* 포인터로 문자열을 사용하는 방법 */

#include <stdio.h>

int main(void)
{
    char *dessert = "apple";        // 포인터에 문자열 초기화
    
    printf("오늘 후식은 %s입니다.\n", dessert);
    dessert = "banana";
    printf("내일 후식은 %s입니다.\n", dessert);

    return 0;
}
