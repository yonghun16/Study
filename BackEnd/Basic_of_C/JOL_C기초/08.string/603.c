#include <stdio.h>

int main(void)
{
    char a[100];
    int i;
    int flag = 1;
    fgets(a, 100, stdin);
    for(i=0;a[i]!=0;i++){
        if(a[i] == ' '){             //공백(단어 끝)이면 
            if(flag == 1) {          // flag == 1였을 때(홀 수 번째 출력 신호)
                flag = 0;             // flag = 0(짝수 번째는 출력X)
                printf("\n");
            }
            else {
                flag = 1;             // 다음 공백이 왔을 때(=짝수 끝, 홀수 시작)
            }
        }
        else if(flag == 1){
            printf("%c", a[i]);   // flag = 1(홀수 신호)이면 출력
        }
    }

    return 0;
}
