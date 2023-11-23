#include <stdio.h>

int main(void)
{
    int N;
    scanf("%d", &N);

    int i,j,k;
    int arr[100][100];
    for(i=0;i < N;i++){
        for(j=0;j < N;j++){
            arr[i][j] = 0;
        }
    }

    char a = 'A';
    for(i=0;i < N;i++){
        for(j=i, k=0;j < N;j++, k++){
            arr[j][k] = a++;
            if(a == 'Z'+1) a = 'A';
        }
    }

    for(i=0;i < N;i++){
        for(j=N-1;j >= 0;j--){
            if(arr[i][j]==0) printf("  ");
            else printf("%c ", arr[i][j]);
        }
        printf("\n");
    }

    return 0;
}

