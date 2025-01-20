import pygame
import random
import sys, os
from time import sleep

# 게임 경로 설정하기
GAME_ROOT_FOLDER = os.path.dirname(__file__)
IMAGE_FOLDER = os.path.join(GAME_ROOT_FOLDER, "images")
SOUND_FOLDER = os.path.join(GAME_ROOT_FOLDER, "sounds")

# 변수 선언
BLACK = (0, 0, 0)
padWidth = 480          # 게임 화면의 가로크기
padHeight = 640         # 게임 화면의 세로크기
textFonts = ['NanumGothic', 'arial']
textSize = 20

rockImage = ['rock01.png', 'rock02.png', 'rock03.png', 'rock04.png', 'rock05.png', \
             'rock06.png', 'rock07.png', 'rock08.png', 'rock09.png', 'rock10.png', \
             'rock11.png', 'rock12.png', 'rock13.png', 'rock14.png', 'rock15.png', \
             'rock16.png', 'rock17.png', 'rock18.png', 'rock19.png', 'rock20.png', \
             'rock21.png', 'rock22.png', 'rock23.png', 'rock24.png', 'rock25.png', \
             'rock26.png', 'rock27.png', 'rock28.png', 'rock29.png', 'rock30.png' ]
explosionSound = ['explosion01.wav', 'explosion02.wav', 'explosion03.wav', 'explosion04.wav']

# 운석을 맞춘 개수 계산
def writeScore(count):
    global gamePad
    font = pygame.font.SysFont(textFonts, textSize)
    text = font.render('파괴한 운석수: ' + str(count), True, (255, 255, 255))
    gamePad.blit(text, (10, 5))

# 운속을 놓친 개수 계산
def writePassed(count):
    global gamePad
    font = pygame.font.SysFont(textFonts, textSize)
    text = font.render('놓친 운석수: ' + str(count), True, (255, 0, 0))
    gamePad.blit(text, (345, 5))

# 게임 메시지 출력
def writeMessage(text):
    global gamePad, gameoverSound
    font = pygame.font.SysFont(textFonts, 40)
    text = font.render(text, True, (255, 0, 0))
    textpos = text.get_rect()
    textpos.center = (padWidth/2, padHeight/2)
    gamePad.blit(text, textpos)
    pygame.display.update()
    pygame.mixer.music.stop()   # 배경음악 정지
    gameoverSound.play()        # 게임오버 사운드 재생
    sleep(2)
    pygame.mixer.music.play(-1) # 배경 음악 재생
    runGame()

# 전투기가 운석과 충돌했을 대 메시지 출력
def crash():
    global gamePad
    writeMessage("전투기 파괴")

# 게임 오버 메시지 보이기
def gameOver():
    global gamePad
    writeMessage("게임 오버")

# 게임에 등장하는 객체를 드로잉
def drawObject(obj, x, y):
    global gamePad
    gamePad.blit(obj, (x,y))

def initGame():
    global gamePad, clock, background, fighter, missile, rock, explosion, missileSound, gameoverSound
    pygame.init()
    gamePad = pygame.display.set_mode((padWidth, padHeight))
    pygame.display.set_caption('PyShooting')    # 게임 이름
    background = pygame.image.load(os.path.join(IMAGE_FOLDER, "background.png"))
    fighter = pygame.image.load(os.path.join(IMAGE_FOLDER, "fighter.png"))
    missile = pygame.image.load(os.path.join(IMAGE_FOLDER, "missile.png"))
    rock = pygame.image.load(os.path.join(IMAGE_FOLDER,random.choice(rockImage)))
    explosion = pygame.image.load(os.path.join(IMAGE_FOLDER, "explosion.png"))
    pygame.mixer.music.load(os.path.join(SOUND_FOLDER, "music.wav"))
    pygame.mixer.music.play(-1)
    missileSound = pygame.mixer.Sound(os.path.join(SOUND_FOLDER, "missile.wav"))
    gameoverSound = pygame.mixer.Sound(os.path.join(SOUND_FOLDER, "gameover.wav"))
    clock = pygame.time.Clock()

def runGame():
    global gamePad, clock, background, fighter, missile, rock, explosion, missileSound, gameoverSound

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

    # 운석 랜덤 생성
    rockSize = rock.get_rect().size
    rockWidth = rockSize[0]
    rockHeight = rockSize[1]
    destorySound = pygame.mixer.Sound(os.path.join(SOUND_FOLDER,random.choice(explosionSound)))

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
                elif event.key == pygame.K_SPACE:   # 스페이스키로 미사일 발사
                    missileSound.play()
                    missileX = x + (fighterWidth/2) - 5
                    missileY = y - fighterHeight
                    missileXY.append([missileX, missileY])
            if event.type in [pygame.KEYUP]:
                if event.key == pygame.K_LEFT or event.key == pygame.K_RIGHT:
                    fighterX = 0
        x += fighterX   # 전투기 x좌표 재설정

        # [전투기]
        # x좌표 넘어 갔을 때 전투기 위치 재조정
        if x < 0:
            x = 0
        elif x > padWidth - fighterWidth:
            x = padWidth - fighterWidth
        
        # 전투기가 운석과 충돌했는지 체크
        if y < rockY + rockHeight:
            # 운석 왼편과 충돌, 운석 오른편과 충돌, 운석 정면 충돌
            if (rockX > x and rockX < x + fighterWidth) or \
                (rockX + rockWidth > x and rockX + rockWidth < x + fighterWidth) or \
                (rockX + rockWidth > x + fighterWidth and rockX < x):
                crash()

        drawObject(fighter, x, y)    # 전투기 그리기

        # [미사일]
        if len(missileXY) != 0:                     # 미사일 개수가 0이 아니면 (다수이면)
            for i, bxy in enumerate(missileXY):     # enumerate함수 사용(인덱스와 원소로 튜플 생성)
                bxy[1] -= 10
                missileXY[i][1] = bxy[1]

                # 운석과 미사일 충돌
                if bxy[1] < rockY:
                    if bxy[0] > rockX and bxy[0] < rockX + rockWidth:
                        missileXY.remove(bxy)
                        isShot = True               # 샷
                        shotCount += 1

                if bxy[1] <= 0:
                    try:
                        missileXY.remove(bxy)
                    except:
                        pass
        if len(missileXY) != 0:
            for bx, by in missileXY:
                drawObject(missile, bx, by)     # 미사일 그리기

        # [운석]
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
            rockPassed +=1
            if rockPassed == 5:
                gameOver()

        # 운석이 미사일 맞은 경우
        if isShot:
            # 운석 폭발
            drawObject(explosion, rockX, rockY)
            destorySound.play()
            # 새로운 운석 (랜덤)
            rock = pygame.image.load(os.path.join(IMAGE_FOLDER,random.choice(rockImage)))
            rockSize = rock.get_rect().size
            rockWidth = rockSize[0]
            rockHeight = rockSize[1]
            rockX = random.randrange(0, padWidth - rockWidth)
            rockY = 0
            destorySound = pygame.mixer.Sound(os.path.join(SOUND_FOLDER,random.choice(explosionSound)))
            isShot = False
            #운석 맞추면 속도증가
            rockSpeed += 0.1
            if rockSpeed >= 10:
                rockSpeed = 10

        drawObject(rock, rockX, rockY)  # 운석 그리기

        # 운석 맞춘 점수 표시
        writeScore(shotCount)
        # 운석 좋친 수 표시
        writePassed(rockPassed)

        pygame.display.update()         # 게임화면을 업데이트
        clock.tick(60)                  # 게임의 초당 프레임수를 60으로 설정
    pygame.quit()   # pygame 종료

initGame()
runGame()
