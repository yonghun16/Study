import pygame
import sys
from time import sleep

BLACK = (0, 0, 0)
padWidth = 480          # 게임 화면의 가로크기
padHeight = 640         # 게임 화면의 세로크기

def initGame():
    global gamePad, clock
    pygame.init()
    gamePad = pygame.display.set_mode((padWidth, padHeight))
    pygame.display.set_caption('PyShooting')    # 게임 이름
    clock = pygame.time.Clock()

def runGame():
    global gapdPad, clock

    onGame = False
    while not onGame:
        for event in pygame.event.get():
            if event.type in [pygame.QUIT]:     # 게임 프로그램 종료
                pygame.quit()
                sys.exit()
        gamePad.fill(BLACK)             # 게임 화면 (검은색)
        pygame.display.update()         # 게임화면을 다시그림
        clock.tick(60)                  # 게임의 초당 프레임수를 60으로 설정
    pygame.quit()   # pygame 종료

initGame()
runGame()
