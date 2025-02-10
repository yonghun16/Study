#include <stdio.h>

struct Person {
    int age;
    double height;
};

void input(struct Person *pa, struct Person *pb);
void process(struct Person *pa, struct Person *pb);
void output(struct Person *pa, struct Person *pb);


int main(void)
{
    struct Person a;
    struct Person b;

    input(&a, &b);
    process(&a, &b);
    output(&a, &b);

    return 0;
}

void input(struct Person *pa, struct Person *pb) {
    printf("첫 번째 사람의 나이와 키 입력 : ");
    scanf("%d %lf", &pa->age, &pa->height);
    printf("두 번째 사람의 나이와 키 입력 : ");
    scanf("%d %lf", &pb->age, &pb->height);
}

void process(struct Person *pa, struct Person *pb) {
    struct Person temp;
    temp = *pa;
    *pa = *pb;
    *pb = temp;
}

void output(struct Person *pa, struct Person *pb) {
    printf("첫 번째 사람의 나이와 키 : %d %.1lf\n", pa->age, pa->height);
    printf("두 번째 사람의 나이와 키 : %d %.1lf\n", pb->age, pb->height);
}
