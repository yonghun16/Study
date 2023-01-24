/* 같은걸 삭제하는 것이 아닌, 같지 않은 것만 추출하는 방법 */

#include <stdio.h>

void squeeze (char s1[], char s2[])
{
    int	i, j, k;

    for (i = j = 0; s1[i] != '\0'; i++) {
        for (k = 0; s2[k] != '\0' && s1[i] != s2[k]; k++)   // s2인자가 s1과 같거나 loop의 끝이면 k값을 남기고 루프 종료 
            ;
        if (s2[k] == '\0')      // 남긴 k값이 s2의 끝이면 -> s2와 s1이 같은게 없다면,
            s1[j++] = s1[i];    // s1에 해당 s1값을 넣어줌 -> 같지 않은 것과 마찬가지이므로 이를 추출하여 s1에 넣어줌. 
    }
    s1[j] = '\0';               // 마지막 j지점에 문자열 끝을 넣어줌.
}

int main ()
{
    char s1[] = "abcdef", 
         s2[] = "bdf";
    printf("squeeze(\"%s\", \"%s\") ", s1, s2);
    squeeze(s1, s2);
    printf("=> \"%s\"\n", s1);

    return 0;
}
