#include <stdio.h>
#include <stdlib.h>
#include <time.h>

int level;
int arrayFish[6];
int* cursor;

void initData();
void printFishes();
void decreaseWater(long elapsedTime);
int checkFishAlive();

int initNum();
long initTotalElapsedTime(long startTime);
long initPrevElapsedTime(long totalElapsedTime, long prevElapsedTime);
void watering(int num);
void levelUp(long totalElapsedTime);
void isItAlive();

int main(void)
{
    long startTime = 0;        // 게임 시작시간
    long totalElapsedTime = 0; // 총 경과시간
    long prevElapsedTime = 0;  // 직전 경과시간 (최근에 물을 준 시간 간격)

    int num;                   // 물을 채울 어항 번호 (사용자 입력)

    initData();

    cursor = arrayFish;

    startTime = clock();       // 현재시각을 millisecond(ms, 1000분의 1초) 단위로 변환

    while (1)                  // 문한반복
    {
        printFishes();

        num = initNum();

        totalElapsedTime = initTotalElapsedTime(startTime);
        printf("게임 총 경과시간: %ld 초\n", totalElapsedTime);

        prevElapsedTime = initPrevElapsedTime(totalElapsedTime, prevElapsedTime);
        printf("마지막으로 물을 준 이후로 흐른 시간: %ld 초\n", prevElapsedTime);

        decreaseWater(prevElapsedTime);

        watering(num);

        levelUp(totalElapsedTime);

        isItAlive();

        prevElapsedTime = totalElapsedTime;
    }
    return 0;
}

void initData()
{
    level = 1;                 // 게임 시작 레벨 (1-5)

    for (int i = 0; i < 6; i++)
    {
        arrayFish[i] = 100;     // 최초 어항 물높이 
    }
}

void printFishes()
{
    printf("\n");
    printf("%3d번 %3d번 %3d번 %3d번 %3d번 %3d번\n", 1, 2, 3, 4, 5, 6);
    for (int i = 0; i < 6; i++)
    {
        printf(" %4d ", arrayFish[i]);
    }
    printf("\n\n");
}

void decreaseWater(long elapsedTime)
{
    for (int i = 0; i < 6; i++)
    {
        arrayFish[i] -= (level * 3 * (int)elapsedTime); // 3은 난이도 조절용

        // 물의 최소량은 0임.
        if (arrayFish[i] < 0)
        {
            arrayFish[i] = 0;
        }
    }
}

int checkFishAlive()
{
    for (int i = 0; i < 6; i++)
    {
        if (arrayFish[i] > 0)
            return 1; // 참 True
    }

    return 0;
}

int initNum() {
    int num;

    while (1) {
        printf("몇 번 어항에 물을 주시겠어요? ");
        scanf("%d", &num);

        // 입력값 체크
        if (num < 1 || num > 6)
        {
            printf("\n입력값이 잘못되었어요.\n");
            continue;
        }
        else {
            return num;
        }
    }
}

long initTotalElapsedTime(long startTime) {
    long totalElapsedTime = 0;

    totalElapsedTime = (clock() - startTime) / 10;

    return totalElapsedTime;
}

long initPrevElapsedTime(long totalElapsedTime, long prevElapsedTime) {
    return totalElapsedTime - prevElapsedTime;
}

void watering(int num) {
    if (cursor[num - 1] <= 0)
    {
        printf("%d 번 물고기는 이미 사망. 물 주지 않음.\n", num);
    }
    else if (cursor[num - 1] + 1 <= 100)
    {
        printf("%d 번 어항에 물주기\n\n", num);
        cursor[num - 1] += 1;
    }
}

void levelUp(long totalElapsedTime) {
    if (totalElapsedTime / 20 > level - 1)
    {
        level += 1;
        printf(" *** 축 레벨업! 기존 %d 레벨에서 %d 레벨로 업그레이드 ***\n\n", level - 1, level);

        if (level == 5)
        {
            printf("\n\n축하합니다. 최고레벨을 달성하였음! 게임 종료!\n\n");
            exit(0);
        }
    }
}

void isItAlive() {
    if (checkFishAlive() == 0)
    {
        printf("모든 물고기 사망 ㅠㅠ\n");
        exit(0);
    }
    else
    {
        printf("물고기 아직 살아 있음!\n");
    }
}
