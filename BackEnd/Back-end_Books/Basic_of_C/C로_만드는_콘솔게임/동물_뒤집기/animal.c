#include <stdio.h>
#include <stdlib.h>
#include <time.h>

int arrayAnimal[4][5]; // 카드 20장의 위치 지정
int checkAnimal[4][5]; // 뒤집혔는지 여부를 기억하는 배열. 항목이 0으로 자동 초기화됨.
char * strAnimal[10];  // 동물 이름들의 배열

void initAnimalArray();
void initAnimalName();
void shuffleAnimal();
int getEmptyPosition();
int conv_pos_x(int x);
int conv_pos_y(int y);
void printAnimals();
void printQuestion();
int foundAllAnimals();

int main()
{
    srand(time(NULL));

    initAnimalArray();
    initAnimalName();

    shuffleAnimal();

    int failCount = 0; // 실패 횟수 저장

    while(1)
    {
        int select1 = 0; // 사용자 선택 수 1
        int select2 = 0; // 사용자 선택 수 2

        printAnimals(); // 동물 위치 출력
        printQuestion(); // 문제 출력(카드 지도 보여주기)

        printf("뒤집을 카드 두 개를 고르세요: ");
        scanf("%d %d", &select1, &select2);

        if (select1 == select2)
            continue; 

        // 좌표를 확인한 다음에 동일한 동물인지 확인하기
        int firstSelect_x = conv_pos_x(select1);
        int firstSelect_y = conv_pos_y(select1);

        int secondSelect_x = conv_pos_x(select2);
        int secondSelect_y = conv_pos_y(select2);

        // 아직 뒤집히지 않은 카드이고 두 동물이 동일한지 여부확인
        if (
            checkAnimal[firstSelect_x][firstSelect_y] == 0
            && checkAnimal[secondSelect_x][secondSelect_y] == 0
            && arrayAnimal[firstSelect_x][firstSelect_y] 
                == arrayAnimal[secondSelect_x][secondSelect_y]
            )
        {
            printf("\n\n빙고! : %15s 발견\n\n", 
                    strAnimal[arrayAnimal[firstSelect_x][firstSelect_y]]);
            checkAnimal[firstSelect_x][firstSelect_y] = 1;
            checkAnimal[secondSelect_x][secondSelect_y] = 1;
        }
        else{
            printf("\n\n땡!! (틀렸거나 아미 뒤집힌 카드입니다!\n");
            printf("%d : %s\n", select1, 
                    strAnimal[arrayAnimal[firstSelect_x][firstSelect_y]]);
            printf("%d : %s\n", select2, 
                    strAnimal[arrayAnimal[secondSelect_x][secondSelect_y]]);
            printf("\n\n");

            failCount++;
        }

        // 모든 동물을 다 찾은 경우
        if (foundAllAnimals() == 1)
        {
            printf("\n\n축하합니다! 모든 동물을 다 찾았네요!\n");
            printf("지금까지 총 %d번 실수하였습니다.\n", failCount);
            break;
        }
    }

    return 0;
}

void initAnimalArray()
{
    for (int i=0; i < 4; i++) 
    {
        for (int j = 0; j < 5; j++)
        {
            arrayAnimal[i][j] = -1; // 카드 선정 초기화
        }
    }
}

void initAnimalName()
{
    strAnimal[0] = "원숭이";
    strAnimal[1] = "하마";
    strAnimal[2] = "강아지";
    strAnimal[3] = "고양이";
    strAnimal[4] = "돼지";

    strAnimal[5] = "코끼리";
    strAnimal[6] = "기린";
    strAnimal[7] = "낙타";
    strAnimal[8] = "타조";
    strAnimal[9] = "호랑이";
}

void shuffleAnimal()
{
    // 10마리의 동물을 2번씩 무작위로
    // 4x5 크기의 2차원 행렬에 위치시키기
    for (int i = 0; i<10; i++)
    {
        for (int j = 0; j<2; j++)
        {
            int pos = getEmptyPosition();
            int x = conv_pos_x(pos);
            int y = conv_pos_y(pos);

            arrayAnimal[x][y] = i;
        }
    }
}

int getEmptyPosition()
{
    // 4x5 크기의 행렬에서 빈 위치의 좌표 찾기
    while(1)
    {
        int randPos = rand() % 20; // 0-19 사이의 숫자 반환
        int x = conv_pos_x(randPos);
        int y = conv_pos_y(randPos);

        if (arrayAnimal[x][y] == -1)
        {
            return randPos;
        }
    }
    return 0;
}

int conv_pos_x(int x)
{
    // 4x5 크기의 2차원 배열에서 행의 값 확인
    return x / 5;
}

int conv_pos_y(int y)
{
    // 4x5 크기의 2차원 배열에서 열의 값 확인
    return y % 5;
}

void printAnimals()
{
    printf("\n=====쉿, 이건 비밀인데 몰래 보여주는 거임.=====\n\n");
    // 4x5 크기의 동물로 구성된 행렬 출력
    for (int i=0; i<4; i++)
    {
        for (int j=0; j<5; j++)
        {
            printf("%15s", strAnimal[arrayAnimal[i][j]]);
        }
        printf("\n");
    }
    printf("\n=======================================\n\n");
}

void printQuestion()
{ 
    printf("\n\n(문제)\n");

    int seq = 0;

    for (int i=0; i<4; i++)
    {
        for (int j=0; j<5; j++)
        {
            // 카드를 뒤집어서 정답을 맞혔으면 동물이름 보여주기
            if (checkAnimal[i][j] != 0)
            {
                printf("%15s", strAnimal[arrayAnimal[i][j]]);
            }
            // 정답을 맞히지 못했으면 위치를 나타내는 숫자 보여주기
            else{
                printf("%15d", seq);
            }
            seq++;
        }
        printf("\n");
    }
}

int foundAllAnimals()
{
    for (int i=0; i<4; i++)
    {
        for (int j=0; j<5; j++)
        {
            if (checkAnimal[i][j] == 0)
            {
                return 0;
            }
        }
    }

    // 모든 동물을 다 찾은 경우
    return 1;
}
