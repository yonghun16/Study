import pygame
import os

# 게임 스크린 크기
SCREEN_WIDTH = 800
SCREEN_HEIGHT = 600

# 색 정의
GRAY = (200, 200, 200)

# pygame 초기화
pygame.init()

# 윈도우 제목
pygame.display.set_caption("Keyboard")

# 스크린 정의
screen = pygame.display.set_mode((SCREEN_WIDTH, SCREEN_HEIGHT))

# 게임 화면 업데이트 속도
clock = pygame.time.Clock()

# assets 경로 지정
current_path = os.path.dirname(__file__)
assets_path = os.path.join(current_path, 'assets')

# 키보드 이미지 초기 설정
keyboard_image = pygame.image.load(os.path.join(assets_path, 'keyboard.png'))
keyboard_x = int(SCREEN_WIDTH / 2)
keyboard_y = int(SCREEN_HEIGHT / 2)
keyboard_dx = 0
keyboard_dy = 0

# 게임 종료 전까지 반복
done = False

# 게임 반복 구간
while not done:
    # 이벤트 반복 구간
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            done = True

        # 키가 눌릴 경우
        elif event.type == pygame.KEYDOWN:
            if event.key == pygame.K_LEFT:
                keyboard_dx = -7
            elif event.key == pygame.K_RIGHT:
                keyboard_dx = 7
            elif event.key == pygame.K_UP:
                keyboard_dy = -7
            elif event.key == pygame.K_DOWN:
                keyboard_dy = 7

        # 키가 놓일 경우
        elif event.type == pygame.KEYUP:
            if event.key == pygame.K_LEFT or event.key == pygame.K_RIGHT:
                keyboard_dx = 0
            elif event.key == pygame.K_UP or event.key == pygame.K_DOWN:
                keyboard_dy = 0

        # 게임 로직 구간
        # 키보드 이미지의 위치 변경
        keyboard_x += keyboard_dx
        keyboard_y += keyboard_dy

        # 스크린 채우기
        screen.fill(GRAY)

        # 화면 그리기 구간
        # 키보드 이미지 그리기
        screen.blit(keyboard_image, [keyboard_x, keyboard_y])

        # 화면 업데이트
        pygame.display.flip()

        #초당 60 프레임으로 업데이트
        clock.tick(60)
    
# 게임 종료
pygame.quit()
