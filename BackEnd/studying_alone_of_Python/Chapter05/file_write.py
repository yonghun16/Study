# 랜덤한 숫자를 만들기 위해 가져옵니다.

import random

# 간단한 한글 리스트를 만듭니다.
hanguls = list("가나다라마바사아자카타파하")

#파일을 쓰기 모드로 엽니다.
with open("info.txt", "w") as file:
    for i in range(1000):
        name = random.choice(hanguls) + random.choice(hanguls)
