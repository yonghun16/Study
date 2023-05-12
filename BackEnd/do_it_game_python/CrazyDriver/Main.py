# 불러오기
import sys, os
import pygame
from pygame.locals import *

# 게임 색상 정의하기
BLACK = (0, 0, 0)
WHITE = (255, 255, 255)
RED = (255, 0, 0)

# 게임 경로 설정하기
GAME_ROOT_FOLDER = os.path.dirname(__file__)
IMAGE_FOLDER = os.path.join(GAME_ROOT_FOLDER, "Images")

# 게임 시작은 이곳에서
# 파이게임 초기화하기
pygame.init()

# 프레임 매니저 초기화하기
clock = pygame.time.Clock()

#프레임 레이트 설정하기
clock.tick(60)

#제목 표시줄 설정하기
pygame.display.set_caption("Crazy Driver")

#이미지 불러오기
IMG_ROAD = pygame.image.load(os.path.join(IMAGE_FOLDER, "Road.png"))

#게임 화면 초기화하기
screen = pygame.display.set_mode((500, 800))

#배경 색상 설정하기
screen.fill(WHITE)

#화면 업데이트 하기
pygame.display.update()

# 메인 게임 루프
while True:
    # 배경 두기
    screen.blit(IMG_ROAD, (0, 0))

    # 이벤트 확인하기
    for event in pygame.event.get():
        # 플레이어가 게임을 그만두는지?
        if event.type == QUIT:
            # 게임 끝내기
            pygame.quit()
            sys.exit()

    # 화면 업데이트하기
    pygame.display.update()
