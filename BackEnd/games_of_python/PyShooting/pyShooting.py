import pygame
import sys, os
from time import sleep

# 게임 경로 설정하기
GAME_ROOT_FOLDER = os.path.dirname(__file__)
IMAGE_FOLDER = os.path.join(GAME_ROOT_FOLDER, "images")

BLACK = (0, 0, 0)
padWidth = 480          # 게임 화면의 가로크기
padHeight = 640         # 게임 화면의 세로크기

# 게임에 등장하는 객체를 드로잉
def drawObject(obj, x, y):
    global gamePad
    gamePad.blit(obj, (x,y))

def initGame():
    global gamePad, clock, background
    pygame.init()
    gamePad = pygame.display.set_mode((padWidth, padHeight))
    pygame.display.set_caption('PyShooting')    # 게임 이름
    background = pygame.image.load(os.path.join(IMAGE_FOLDER, "background.png"))

    clock = pygame.time.Clock()

def runGame():
    global gapdPad, clock

    onGame = False
    while not onGame:
        for event in pygame.event.get():
            if event.type in [pygame.QUIT]:     # 게임 프로그램 종료
                pygame.quit()
                sys.exit()

        drawObject(background, 0, 0)    # 배경화면 그리기
        pygame.display.update()         # 게임화면을 다시그림
        clock.tick(60)                  # 게임의 초당 프레임수를 60으로 설정
    pygame.quit()   # pygame 종료

initGame()
runGame()
