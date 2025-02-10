/* 자기 참조 구조체로 list 만들기 */

#include <stdio.h>

struct list
{
    int num;                // 데이터를 저장하는 멤버
    struct list *next;      // 구조체 자신을 가리키는 포인터 멤버
};

int main(void)
{
    struct list a = {10, 0}, 
                b = {20, 0}, 
                c = {30, 0};            // 구조체 변수 초기화
    struct list *head = &a,             // 헤드 포인터 초기화
                *current;   

    a.next = &b;                        // a의 포인터 멤버가 b를 가리킴
    b.next = &c;                        // b 포인터 멤버가 c를 가리킴

    printf("head->num : %d\n", head->num);               // head가 가리키는 a의 num 멤버 사용
    printf("head->next->num : %d\n", head->next->num);   // head로 b의 num 멤버 사용

    printf("list all : ");
    current = head;                     // 최초 current 포인터가 a를 가리킴
    while (current != NULL)             // 마지막 구조체 변수까지 출력하면 반복 종료
    {
        printf("%d ", current->num);    // current가 가리키는 구조체 변수의 num 출력
        current = current->next;        // current가 다음 구조체 변수를 가리키도록 함.
    }
    printf("\n");

    return 0;
}
