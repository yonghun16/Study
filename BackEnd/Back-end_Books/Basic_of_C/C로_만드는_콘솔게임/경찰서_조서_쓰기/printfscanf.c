#include <stdio.h>

int main() {
    // 프로젝트
    // 경찰관이 범죄자의 정부를 입수 (조서 작성)
    // 이름? 나이? 몸무게? 키? 범죄명?
    char name[256];
    printf("이름이 뭐에요? ");
    scanf("%s", name);

    int age;
    printf("몇살이에요? ");
    scanf("%d", &age);
    
    float weight;
    printf("몸무게는 몇 kg이에요? ");
    scanf("%f", &weight);

    double height;
    printf("키는 몇 cm 이예요? ");
    scanf("%lf", &height);

    char what[256];
    printf("무슨 범죄를 저질렀어요? ");
    scanf("%s", what);

    // 조서 내용 출력
    printf("\n\n--- 범죄자 정보 ---\n\n");
    printf("이름     : %s\n", name);
    printf("나이     : %d\n", age);
    printf("몸무게   : %.2f\n", weight);
    printf("키       : %lf\n", height);
    printf("범죄     : %s\n", what);

    return 0;
}
