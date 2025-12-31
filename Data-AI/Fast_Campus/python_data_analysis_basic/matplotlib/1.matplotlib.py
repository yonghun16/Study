"""
1. Matplotlib 기본 개념

matplotlib 패키지 추가
패키지가 없는 경우, 설치 명령어 : pip install matplotlib
"""

# matplotlib.pyplot 모듈 로드하여 plt로 사용
import matplotlib.pyplot as plt

"""
2. Matplotlib 숫자 입력

2-1. 한 개의 리스트 입력
한 개의 숫자 리스트 형태로 값을 입력하면 y값으로 인식
x값은 기본적으로 [0, 1, 2, 3]으로 설정됨
파이썬 튜플, 넘파이 배열 형태도 가능
plt.show( ) 함수는 그래프를 화면에 나타나도록 함
"""
# 하나의 숫자 리스트 입력
# 리스트의 값들이 y 값들이라고 가정하고 x값 [0, 1, 2, 3]을 '자동으로 만들어냄'
# plt.show( ) 함수는 그래프를 화면에 나타나도록 함
plt.plot([2, 3, 4, 5])
# plt.show()


"""
2-2. 두 개의 리스트 입력
두 개의 숫자 리스트 형태로 값을 입력하면 순서대로 x, y 값으로 인식
순서쌍(x, y)으로 매칭된 값을 좌표평면 위에 그래프 시각화
"""
# 두 개의 숫자 리스트 입력
# 첫 번째 리스트의 값은 x값, 두 번째 리스트의 값은 y로 적용됨
# 순서쌍(x, y)으로 매칭된 값을 좌표평면 위에 그래프 시각화
plt.plot([1, 2, 3, 4], [1, 4, 9, 16])
# plt.show()


"""
3. Matplotlib 축 레이블 설정

xlabel() 함수를 사용하여 그래프의 x축에 대한 레이블 표시
ylabel() 함수를 사용하여 그래프의 y축에 대한 레이블 표시
"""

# xlabel() 함수에 'X-Label' 입력하여 x축에 대한 레이블 표시
# ylabel() 함수에 'Y-Label' 입력하여  y축에 대한 레이블 표시
plt.plot([1, 2, 3, 4], [1, 4, 9, 16])
plt.xlabel("X-Label")
plt.ylabel("Y-Label")
# plt.show()


"""
4. Matplotlib 범례(Legend) 설정

범례(Legend)는 그래프에 데이터의 종류를 표시하기 위한 텍스트
legend() 함수를 사용해서 그래프에 범례 표시
plot() 함수에 label 파라미터 값으로 삽입
"""
# plot() 함수의 label 매개변수에 'Square(제곱)' 문자열 입력
# legend() 함수를 사용해서 그래프에 범례 표시
plt.plot([1, 2, 3, 4], [1, 4, 9, 16], label="Square")
plt.xlabel("X-Label")
plt.ylabel("Y-Label")
plt.legend()
# plt.show()


"""
5. Matplotlib 축 범위 설정

xlim() : X축이 표시되는 범위 지정 [xmin, xmax]
ylim() : Y축이 표시되는 범위 지정 [ymin, ymax]
axis() : X, Y축이 표시되는 범위 지정 [xmin, xmax, ymin, ymax]
입력 값이 없으면 데이터에 맞게 자동으로 범위 지정
"""

# X축의 범위: [xmin, xmax] = [0, 5]
# Y축의 범위: [ymin, ymax] = [0, 20]
plt.plot([1, 2, 3, 4], [3, 6, 9, 12])
plt.xlabel("X-Label")
plt.ylabel("Y-Label")
# plt.xlim([0, 5])  # 표시 범위: 0 ~ 5 → 좌우에 여백이 생김
# plt.ylim([0, 15])  # 표시 범위: 0 ~ 5 → 좌우에 여백이 생김
# plt.show()

# axis() : X, Y축이 표시되는 범위 지정 [xmin, xmax, ymin, ymax]
plt.plot([1, 2, 3, 4], [1, 4, 9, 16])
plt.axis([0, 6, 0, 20])
# plt.show()


"""
6. Matplotlib 선 종류 설정

plot() 함수의 포맷 문자열 사용
  '-' (Solid), '- -' (Dashed), ' : ' (Dotted), ' -. ' (Dash-dot)
plot() 함수의 linestyle 파라미터 값으로 삽입
  '-' (solid), '- -' (dashed), ' : ' (dotted), ' -. ' (dashdot)
튜플을 사용하여 선의 종류 커스터마이즈
  (0, (1, 1)) [dotted], (0, (5, 5)) [dashed], (0, (3, 5, 1, 5)) [dashdotted]
"""
