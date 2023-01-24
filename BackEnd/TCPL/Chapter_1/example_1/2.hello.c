#include <stdio.h>

int main(void) {
	printf("Hello, World\c");   // 알려지지 않은 '이스케이프 시퀸스'
                                // 뒤에 c만 출력됨. 

    return 0;
}
