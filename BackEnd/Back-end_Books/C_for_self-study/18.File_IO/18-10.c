/* 버퍼를 공유하므로 발생하는 문제 */

#include <stdio.h>

int main(void)
{
    FILE *fp;                   // 파일 포인터
    int age;                    // 나이 저장 변수
    char name[20];              // 나이 저장 배열

    fp = fopen("a.txt", "r");               // 파일 개방

    fscanf(fp, "%d", &age);                 // 나이 입력
    while (fgetc(fp) != '\n') { }           // 개행문자를 버리기 위해 fgetc로 한번 더 받아줌 -> 이게 없으면 문제 발생
    fgets(name, sizeof(name), fp);          // 이름 입력

    printf("나이 : %d, 이름 : %s", age, name);  // 입력 데이터 출력

    fclose(fp);

    return 0;
}
