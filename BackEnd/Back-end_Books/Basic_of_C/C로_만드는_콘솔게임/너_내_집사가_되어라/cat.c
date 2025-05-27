#include <stdio.h>
#include <stdlib.h>
#include <time.h>

// 5 마리의 고양이가 있음.
// 아무 키나 눌러서 랜덤으로 고양이를 뽑아 5 마리를 다 모아 키우면 됨.
// 중복 발생 가능

// 고양이 구조체 선언
typedef struct {
    char * name;      // 이름
    int age;          // 나이
    char * character; // 성격
    int level;        // 키우기 난이도 (1-5, 5가 어려움)
} CAT;

// 현재까지 보유한 고양이 목록
int collection[5] = { 0, 0, 0, 0, 0 };

// 전체 고양이 목록 (구조체 리스트)
CAT cats[5];

void initCats(); // 고양이 정보 초기화
void printCat(int selected);
int checkCollection();

int main()
{
    srand(time(NULL));

    // 기본 세팅
    initCats();

    while (1)
    {
        // 임의 키 입력할 때 고양이 한 마리 무작위 선택
        printf("두근두근~! 어느 고양이의 집사가 될까요?\n아무 키나 눌러서 확인하세요!");
        getchar();  // 임의 키 입력 대기

        int selected = rand() % 5; // 0-4 사이의 숫자 반환

        // 뽑힌 고양이 정보 출력
        printCat(selected);

        // 선택된 고양이 표시하기
        collection[selected] = 1;

        // 5 마리 모두 선택되었는지 여부 확인
        int collectAll = checkCollection();

        // 모두 선택한 경우 종료
        if (collectAll)
        {
            break;
        }
    }

    return 0;
}

void initCats()
{
    cats[0].name = "깜냥이";
    cats[0].age = 5;
    cats[0].character = "온순";
    cats[0].level = 1;

    cats[1].name = "귀요미";
    cats[1].age = 3;
    cats[1].character = "날카로움";
    cats[1].level = 2;

    cats[2].name = "수줍이";
    cats[2].age = 7;
    cats[2].character = "늘 잔만 잠";
    cats[2].level = 3;

    cats[3].name = "깍꿍이";
    cats[3].age = 2;
    cats[3].character = "시끄러움";
    cats[3].level = 4;

    cats[4].name = "돼냥이";
    cats[4].age = 1;
    cats[4].character = "배고파함";
    cats[4].level = 5;
}

void printCat(int selected)
{
    printf("\n\n=== 당신은 이 공양이의 집사가 되었어요! ===\n\n");
    printf(" 이름:      %s\n", cats[selected].name);
    printf(" 나이:      %d\n", cats[selected].age);
    printf(" 특징(성격): %s\n", cats[selected].character);
    printf(" 레벨: ");

    for (int i = 0 ; i < cats[selected].level; i++)
    {
        printf("*");
    }
    printf("\n\n");
}

// 5 마리 고양이 모두 선택하였는지 여부 확인
int checkCollection()
{
    // 1. 현재 보유한 고양이 목록 출력하면서
    // 2. 동시에 다 모았는지 여부를 반환

    int collectAll = 1; 

    printf("\n\n === 보유한 고양이 목록입니다 === \n\n");
    for (int i = 0 ; i < 5; i++)
    {
        if (collection[i] == 0) // 고양이 수집 X
        {
            printf("%10s", "(빈 박스)");
            collectAll = 0;
        }
        else // 고양이 수집 O
        {
            printf("%10s", cats[i].name);
        }
    }

    printf("\n============\n\n");

    if (collectAll) // 모든 고양이를 수집한 경우
        {
            printf("\n\n축하합니다! 모든 고양이를 다 모았어요. 열심히 키워주세요.\n\n");
        }

    return collectAll;
}
