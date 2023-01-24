#include <stdio.h>

int main(void)
{
    int	c;

    c = getchar() != EOF;   // !=는 우선순위가 =보다 높다.
                            // 이렇게 쓰면 파일의 끝이 아닐 때는 C가 1이되고, 
                            // 파일의 끝을 만났을 때에는 -1을 반환한다.
    printf("c = getchar() != EOF is %d\n", c);

    return 0;
}
