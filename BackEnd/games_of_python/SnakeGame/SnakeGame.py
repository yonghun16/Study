import pygame
import os
import sys
import random
from time import sleep

# 게임 스크린 전역변수
SCREEN_WIDTH = 800
SCREEN_HEIGHT = 600

# 게임 화면 전역변수
GRID_SIZE = 20
GRID_WIDTH = SCREEN_WIDTH / GRID_SIZE
GRID_HEIGHT = SCREEN_HEIGHT / GRID_SIZE

# 방향 전역변수
UP = (0, -1)
DOWN = (0, 1)
LEFT = (-1, 0)
RIGHT = (1, 0)

# 색상 전역변수
WHITE = (255, 255, 255)
ORANGE = (250, 150, 0)
GRAY = (100, 100, 100)

# 뱀 객체
class Snake():
    def __init__(self):
        self.create()

    # 뱀 생성
    def create(self):
        self.length = 2     # 생성 시 길이 2
        self.positions = [(int(SCREEN_WIDTH/2), int(SCREEN_HEIGHT/2))]  # 생성 시 시작 위치
        self.direction = random.choice([UP, DOWN, LEFT, RIGHT])         # 생성 시 방향

    # 뱀 방향 조정
    def control(self, xy):
        if (xy[0] * -1, xy[1] * -1) == self.direction:
            return
        else:
            self.direction = xy
    # 뱀 이동
    # def move(self):
    #     cur = self.positions[0]


def main():
    # 초기화
    pygame.init()
    pygame.display.set_caption('Snake Game')
    screen = pygame.display.set_mode((SCREEN_WIDTH, SCREEN_HEIGHT))
    clock = pygame.time.Clock()

    done = False
    while not done:
        # 윈도우 화면 채우기
        screen.fill(WHITE)

        # 이벤트 반복 구간
        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                done = True

        # 화면 업데이트
        pygame.display.flip()

        # 초당 60 프레임으로 업데이트
        clock.tick(60)

    # 게임 종료
    pygame.quit()

if __name__ == '__main__':
    main()
