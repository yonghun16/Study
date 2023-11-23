#include <stdio.h>

int main(void)
{
    int N, K;
    int cnt=0;
    int flag = 0;
    scanf("%d %d", &N, &K);

    for (int i = 1; i <= N; i++) {
        if (N % i == 0) {
            cnt++;
            if (cnt == K) {
                flag = cnt;
                printf("%d\n", i);
                return 0;
            }
        }
    }

    if(flag) printf("%d\n", flag);
    else printf("%d\n", 0);

    return 0;
}