import pygame
import os

# 게임 스크린 크기
SCREEN_WIDTH = 640
SCREEN_HEIGHT = 320

# 색 정의
LAND = (160, 120, 40)

# pygame 초기화
pygame.init()

# 윈도우 제목
pygame.display.set_caption("Image")

# 스크린 정의
screen = pygame.display.set_mode((SCREEN_WIDTH, SCREEN_HEIGHT))

# 게임 화면 업데이트 속도
clock = pygame.time.Clock()

# assets 경로 지정
current_path = os.path.dirname(__file__)
assets_path = os.path.join(current_path, 'assets')

# 배경 이미지 로드
background_image = pygame.image.load(os.path.join(assets_path, 'terrain.png'))

# 이미지 로드
mushroom_image_1 = pygame.image.load(os.path.join(assets_path, 'mushroom1.png'))
mushroom_image_2 = pygame.image.load(os.path.join(assets_path, 'mushroom2.png'))
mushroom_image_3 = pygame.image.load(os.path.join(assets_path, 'mushroom3.png'))

# 게임 종료 전까지 반복
done = False

# 게임 반복구간
while not done:
    # 이벤트 반복 구간
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            done = True

    # 게임 로직 구간

    # 화면 삭제 구간

    # 스크린 채우기
    screen.fill(LAND)

    # 화면 그리기 구간
    # 배경 이미지 그리기  (배경이미지, 배경이미지의 사각형을 받아 위치 지정)
    screen.blit(background_image, background_image.get_rect())

    # 버섯 이미지 그리기 (좌표는 왼쪽위)
    screen.blit(mushroom_image_1, [100, 80])
    screen.blit(mushroom_image_2, [300, 100])
    screen.blit(mushroom_image_3, [450, 140])

    # 화면 업데이트
    pygame.display.flip()

    # 초당 60 프레임으로 업데이트 
    clock.tick(60)

# 게임 종료
pygame.quit()
