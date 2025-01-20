#include <stdio.h>
#include <stdlib.h>

void showLoginBar();
void showMenu();
void loginEnter();
void passwdChangeEnter();
int gameExit();

int login()
{
    int state = 1;
    char menuNumber[10];

    showLoginBar();
    
    while(1) {
        int menuNumberToInt = 0;
        showMenu();
        scanf("%s", menuNumber); 

        if(menuNumber[1]) {
            menuNumber[0] = 0;
        } else {
            menuNumberToInt = (int)menuNumber[0]-48;
        }

        switch (menuNumberToInt) {
            case 1: loginEnter(); break;
            case 2: passwdChangeEnter(); break;
            case 3: state = gameExit(); break;
            default: printf("\n*** 잘못 누르셨습니다. 다시 입력해 주세요. ***\n"); continue;
        }

        if (!state) break;
    }

    return state;
}

void showLoginBar()
{
    printf("\n──────────────────────────────────────────────────────────────────────────────────────────────\n");
}

void showMenu()
{
    printf("\n");
    printf("1. 로그인\n");
    printf("2. 패스워드 변경\n");
    printf("3. 종료\n");
    printf("메뉴 번호를 입력하세요 : ");
}

void loginEnter() {
    char id[10];
    char passwd[20];
    printf("\nID : ");
    scanf("%s", id);
    printf("PASSWORD : ");
    scanf("%s", passwd);
}

void passwdChangeEnter()
{
    printf("\n패스워드 변경 화면\n");
}

int gameExit()
{
    printf("\n게임을 종료 합니다.\n");

    return 0;
}
