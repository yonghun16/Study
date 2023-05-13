import pygame
import random
import sys, os
from time import sleep

# 게임 경로 설정하기
GAME_ROOT_FOLDER = os.path.dirname(__file__)
IMAGE_FOLDER = os.path.join(GAME_ROOT_FOLDER, "images")

BLACK = (0, 0, 0)
padWidth = 480          # 게임 화면의 가로크기
padHeight = 640         # 게임 화면의 세로크기

rockImage = ['rock01.png', 'rock02.png', 'rock03.png', 'rock04.png', 'rock05.png', \
             'rock06.png', 'rock07.png', 'rock08.png', 'rock09.png', 'rock10.png', \
             'rock11.png', 'rock12.png', 'rock13.png', 'rock14.png', 'rock15.png', \
             'rock16.png', 'rock17.png', 'rock18.png', 'rock19.png', 'rock20.png', \
             'rock21.png', 'rock22.png', 'rock23.png', 'rock24.png', 'rock25.png', \
             'rock26.png', 'rock27.png', 'rock28.png', 'rock29.png', 'rock30.png' ]

# 게임에 등장하는 객체를 드로잉
def drawObject(obj, x, y):
    global gamePad
    gamePad.blit(obj, (x,y))

def initGame():
    global gamePad, clock, background, fighter, missile, rock, explosion
    pygame.init()
    gamePad = pygame.display.set_mode((padWidth, padHeight))
    pygame.display.set_caption('PyShooting')    # 게임 이름
    background = pygame.image.load(os.path.join(IMAGE_FOLDER, "background.png"))
    fighter = pygame.image.load(os.path.join(IMAGE_FOLDER, "fighter.png"))
    missile = pygame.image.load(os.path.join(IMAGE_FOLDER, "missile.png"))
    rock = pygame.image.load(os.path.join(IMAGE_FOLDER,random.choice(rockImage)))
    explosion = pygame.image.load(os.path.join(IMAGE_FOLDER, "explosion.png"))
    clock = pygame.time.Clock()

def runGame():
    global gapdPad, clock, background, fighter, missile, rock, explosion

    # 전투기 크기
    fighterSize = fighter.get_rect().size
    fighterWidth = fighterSize[0]
    fighterHeight = fighterSize[1]

    # 전투기 초기 위치(x, y)
    x = padWidth * 0.45
    y = padHeight * 0.9
    fighterX = 0

    # 미사일 좌표 리스트
    missileXY = []

    rockSize = rock.get_rect().size
    rockWidth = rockSize[0]
    rockHeight = rockSize[1]

    rockX = random.randrange(0, padWidth - rockWidth)
    rockY = 0
    rockSpeed = 2

    # 전투기 미사일에 운석이 맞았을 경우 True
    isShot = False
    shotCount = 0
    rockPassed = 0

    onGame = False
    while not onGame:
        drawObject(background, 0, 0)    # 배경화면 그리기

        # 키보드 입력 받기
        for event in pygame.event.get():
            if event.type in [pygame.QUIT]:     # 게임 프로그램 종료
                pygame.quit()
                sys.exit()

            if event.type in [pygame.KEYDOWN]:  # 뱡향키로 전투기 조작    
                if event.key == pygame.K_LEFT:
                    fighterX -= 5
                elif event.key == pygame.K_RIGHT:
                    fighterX += 5
                elif event.key == pygame.K_SPACE:
                    missileX = x + (fighterWidth/2) - 5
                    missileY = y - fighterHeight
                    missileXY.append([missileX, missileY])
            if event.type in [pygame.KEYUP]:
                if event.key == pygame.K_LEFT or event.key == pygame.K_RIGHT:
                    fighterX = 0

        # x좌표 넘어 갔을 때 전투기 위치 재조정
        x += fighterX
        if x < 0:
            x = 0
        elif x > padWidth - fighterWidth:
            x = padWidth - fighterWidth
        drawObject(fighter, x, y)    # 전투기 그리기

        if len(missileXY) != 0:
            for i, bxy in enumerate(missileXY):
                bxy[1] -= 10
                missileXY[i][1] = bxy[1]

                if bxy[1] <= 0:
                    try:
                        missileXY.remove(bxy)
                    except:
                        pass

        if len(missileXY) != 0:
            for bx, by in missileXY:
                drawObject(missile, bx, by)     # 미사일 그리기


        rockY += rockSpeed              # 운석 아래로 움직임
        # 운석이 지구로 떨어진 경우
        if rockY > padHeight:
            # 새로운 운석 (랜덤)
            rock = pygame.image.load(os.path.join(IMAGE_FOLDER,random.choice(rockImage)))
            rockSize = rock.get_rect().size
            rockWidth = rockSize[0]
            rockHeight = rockSize[1]
            rockX = random.randrange(0, padWidth - rockWidth)
            rockY = 0

        drawObject(rock, rockX, rockY)  # 운석 그리기


        pygame.display.update()         # 게임화면을 업데이트
        clock.tick(60)                  # 게임의 초당 프레임수를 60으로 설정
    pygame.quit()   # pygame 종료

initGame()
runGame()
