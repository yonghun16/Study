/* 중첩 if문에서 중괄호가 반드시 필요한 경우 */

#include <stdio.h>

int main(void)
{
    int a = 10, b = 20;

    if (a < 0)
    {  // -> 이것과 
        if (b > 0)
        {
            printf("ok");
        }
    }  // -> 이것을 주석처리하면
    else // 이 else는 9행의 if(a<0)가 아닌 11행의 if(b>0)의 else로 판단한다
    {
        printf("ok");
    }

    return 0;
}
