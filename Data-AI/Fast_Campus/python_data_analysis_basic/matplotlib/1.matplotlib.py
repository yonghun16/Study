# matplotlib.pyplot 모듈 로드하여 plt로 사용
import matplotlib.pyplot as plt

# 하나의 숫자 리스트 입력
# 리스트의 값들이 y 값들이라고 가정하고 x값 [0, 1, 2, 3]을 자동으로 만들어냄
# plt.show( ) 함수는 그래프를 화면에 나타나도록 함
plt.plot([2, 3, 4, 5])
# plt.show()


# 두 개의 숫자 리스트 입력
# 첫 번째 리스트의 값은 x값, 두 번째 리스트의 값은 y로 적용됨
# 순서쌍(x, y)으로 매칭된 값을 좌표평면 위에 그래프 시각화
plt.plot([1, 2, 3, 4], [1, 4, 9, 16])
# plt.show()


# xlabel() 함수에 'X-Label' 입력하여 x축에 대한 레이블 표시
# ylabel() 함수에 'Y-Label' 입력하여  y축에 대한 레이블 표시
plt.plot([1, 2, 3, 4], [1, 4, 9, 16])
plt.xlabel("X-Label")
plt.ylabel("Y-Label")
plt.show()
