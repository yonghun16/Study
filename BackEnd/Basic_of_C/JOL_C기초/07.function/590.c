#include <stdio.h> 

int n,a[101]; 

void output(){ 
    int i; 

    for(i=1;i<=n;i++){ 
        printf("%d ",a[i]); 
    } 

    printf("\n");
} 

void dice(int level){ 
    int i; 

    if(level > n){ 
        output();
        return;
    } 

    for (i=a[level-1]; i<=6; i++){ 
        a[level]=i; 
        dice(level+1); 
    } 
} 

int main(void){ 
    scanf("%d", &n); 
    a[0] = 1; 
    dice(1); 

    return 0; 
}

