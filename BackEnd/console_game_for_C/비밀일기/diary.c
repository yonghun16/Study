#include <stdio.h>
#include <string.h>

// 다른 c 파일에 저장된 getch() 함수 불러오기
// 동일한 프로젝트의 폴더에 포함된 파일이어야 함.
extern char getch(void);

// 비밀번호를 입력 받아 맞는 경우는 내용 읽어와서 보여주고, 계속 작성하도록 함수
// 비밀번호가 틀린 경우 경고 메시지 출력 후 종료함.

#define MAX 10000 // 상수 선언

int main()
{
    // fgets, fputs 활용

    char line[MAX]; // 파일에서 불러온 내용 저장
    char contents[MAX]; // 일기장에 입력할 내용
    char password[20]; // 비밀번호 입력할
    char c; // 비밀번호가 입력될 때 한 캐릭터씩 처리하는 용도

    printf("'비밀일기'에 오신 것을 환영합니다!\n");
    printf("비밀번호를 입력하세요:");

    // 비밀번호 입력 처리하기
    int i = 0;
    while (1)
    {
        c = getchar();

        // if (c == 13) // 동영상에서처럼 getch()가 지원되는 윈도우에서 실행하는 경우. 
                        // 13은 '\n'의 아스키 코드
        if (c == '\n') // Enter를 가리키는 번호, 즉, 비밀번호 입력 종료 의미
        {
            password[i] = '\0'; // 비밀먼호 문자열 끝에 추가되는 널 문자 지정
            break; // 비밀번호 입력 종료
        }
        else // 비밀번호 입력 중
        {
            printf("*"); // 입력되는 비밀번호 마스킹 처리 용도
            password[i] = c;
        }

        i++;
    }

    // 입력된 비밀번호 확인하기
    printf("\n\n === 비밀번호 확인 중 ... ===\n\n");

    if (strcmp(password, "skehzheld") == 0) // 비밀번호 = (영어)나도코딩
    {
        printf("=== 비밀번호 확인 완료 ===\n\n");
        char * fileName = "secretdiary.txt";
        FILE * file = fopen(fileName, "a+b"); 

        if (file == NULL) 
        {
            printf("파일 열기 실패!\n");
            return 1;
        }

        // 파일 내용 읽어오기
        while (fgets(line, MAX, file) != NULL)
        {
            printf("%s", line);
        }

        // 내용 추가하기
        printf("\n\n 내용을 계속 작성하세요. 종료하려면 EXIT 또는 exit를 입력하세요\n\n");

        while (1)
        {
            scanf("%[^\n]", contents); // 줄바꿈이 사용되기 직전까지 저장. 즉, 한 문단씩 저장.
            getchar(); // Enter 키 입력을 flush 처리하기

            if (strcmp(contents, "EXIT") == 0 || strcmp(contents, "exit") == 0)
            {
                printf("비밀일기 입력을 종료합니다.\n\n");
                break;
            }

            fputs(contents, file);
            fputs("\n", file); // 줄바꿈을 인위적으로 진행
        }
        fclose(file);
    }
    else
    {
        printf(" === 비밀번호가 틀렸어요. ===\n\n");
        printf(" 꺅!! 당신 누가야?!! 감히 내 일기장을 !!!\n\n\n");
    }

    return 0;
}
