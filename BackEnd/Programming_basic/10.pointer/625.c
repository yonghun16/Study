#include <stdio.h>
#include <stdlib.h>

void sort(int *a, int n);

int main(int argc, char *argv[])
{
    int n;
    int i;
    scanf("%d", &n);
    int *a = (int*)malloc(sizeof(int)*n);

    for(i=0; i<n; i++) {
        scanf("%d", a+i);
    }

    sort(a, n);

    for(i=0; i<n; i++) {
        printf("%d ", *(a+i));
    }

    return 0;
}

void sort(int *a, int n) {
    int i, j, temp;
    for (i = 0; i < n; ++i) {
       for (j = i+1; j < n; j++) {
          if (a[j] >  a[i]) {
              temp = a[j];
              a[j] = a[i];
              a[i] = temp;
          }
       } 
    }
}
