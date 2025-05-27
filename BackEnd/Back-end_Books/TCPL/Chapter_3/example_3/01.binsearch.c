#include <stdio.h>
#include <time.h>

#define ARRAY_LEN 500000

int binsearch(int, int[], int);
int binsearchFast(int, int[], int);

int main(void)
{
    clock_t start, finish;
    int i, v[ARRAY_LEN];
    for (i = 0; i < ARRAY_LEN; i++)
        v[i] = i;


    start = clock();
    for (i = 0; i < ARRAY_LEN; i++) {
        binsearch(i, v, ARRAY_LEN);
    }
    finish = clock();
    printf("binsearch duration: %f\n", ((double)(finish - start)) / CLOCKS_PER_SEC);


    start = clock();
    for (i = 0; i < ARRAY_LEN; i++) {
        binsearchFast(i, v, ARRAY_LEN);
    }
    finish = clock();
    printf("binsearchFast duration: %f\n", ((double)(finish - start)) / CLOCKS_PER_SEC);

    return 0;
}

/* binsearch: find x in v[0] <= v[1] <= ... v[n-1] */
int binsearch(int x, int v[], int n)
{
    int low, high, mid;

    low = 0;
    high = n - 1;

    while (low <= high) {
        mid = (low + high) / 2;
        if (x < v[mid])
            high = mid - 1;
        else if (x > v[mid])
            low = mid + 1;
        else
            return mid;
    }

    return -1;
}

int binsearchFast(int x, int v[], int n)
{
    int low, high, mid;

    low = 0;
    high = n - 1;

    while (low <= high) {
        mid = (low + high) / 2;
        if (x <= v[mid])
            high = mid - 1;
        else
            low = mid + 1;
    }

    if (x == v[mid])
        return mid;
    else if (x > v[mid])
        mid += 1;
    else
        mid -= 1;

    if (mid < 0 || mid > n - 1)
        return -1;
    else
        return mid;
}
