#include <stdio.h>

int main ()
{
	float fahr, celcius;        // 화씨, 섭씨
	int	lower, upper, step;

	lower = 0;                  // 시작
	upper = 300;                // 마지막
	step = 20;                  // 단계적으로 상승시킬 온도

	printf("fahr celcius\n");
	fahr = lower;               // 화씨를 시작점으로 초기화

	while (fahr <= upper) {                         
        celcius = (5.0 / 9.0) * (fahr - 32);        // 화씨를 섭씨로 변환
        printf("%3.0f  %6.1f\n", fahr, celcius);    // 출력
        fahr = fahr + step;                         // step(20F)만큼 증가
	}

    return 0;
}
