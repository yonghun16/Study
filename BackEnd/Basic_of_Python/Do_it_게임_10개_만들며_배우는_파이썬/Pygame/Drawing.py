import pygame

# 게임 스크린 크기
SCREEN_WIDTH = 600
SCREEN_HEIGHT = 700

# 색 정의
BLACK = (0, 0, 0)
WHITE = (255, 255, 255)
RED = (255, 0, 0)
GREEN = (0, 255, 0)
BLUE = (0, 0, 255)

# pygame 초기화
pygame.init()

# 윈도우 제목
pygame.display.set_caption("Pygame-Drawing")

# 스크린 정의
screen = pygame.display.set_mode((SCREEN_WIDTH, SCREEN_HEIGHT))

# 게임 화면 업데이트 속도
clock = pygame.time.Clock()

# 게임 종료 전까지 반복
done = False    #게임이 진행 중인지 확인하는 변수
# done이 True라면 게임이 계속 진행 중이라는 의미

# 게임 반복 구간
while not done:
    # 이벤트 반복 구간
    for event in pygame.event.get():
        # 어떤 이벤트가 발생 했는지 확인
        if event.type == pygame.QUIT:
            done = True

    # 게임 로직 구간

    # 화면 삭제 구간

    # 스크린 채우기
    screen.fill(WHITE)

    # 화면 그리기 구간
    ### 선, 도형, 글자 그리고 위치 ###
    # 선 그리기 - (표시화면, 색, 시작위치, 끝 위치, 두께)
    pygame.draw.line(screen, RED, [50, 50], [500, 50], 10)    
    pygame.draw.line(screen, GREEN, [50, 100], [500, 100], 10)
    pygame.draw.line(screen, BLUE, [50, 150], [500, 150], 10)

    # 사각형 그리기 - (표시화면, 색, 왼쪽위 위치, 가로길이, 세로길이, 두께)
    pygame.draw.rect(screen, RED, [50, 200, 150, 150], 4) 

    # 다각형 그리기- (# 표시화면, 색, [꼭지점의 좌표들], 두께)
    pygame.draw.polygon(screen, GREEN, [[350, 200], [250, 350], [450, 350]], 4)     

    # 원형 그리기 - (표시화면, 색, 중심좌표, 반지름, 두께)
    pygame.draw.circle(screen, BLUE, [150, 450], 60, 4)     

    # 타원 그리기 - (표시화면, 색, 왼쪽위 위치, 가로길이, 세로길이, 두께(0이면 안쪽 채우기))
    pygame.draw.ellipse(screen, BLUE, [250, 400, 300, 100], 0)
    
    # 폰트 선택 - (폰트, 크기, 두껍게, 이탤릭)
    font = pygame.font.SysFont('FixedSys', 40, True, False)

    # 글자 표현 - (텍스트, 안티앨리어스 여부, 색상, 배경색)
    text = font.render("Hello pygame", True, BLACK)

    # 화면에 텍스트 표시
    screen.blit(text, [200, 600])

    # 화면 업데이트
    pygame.display.flip()

    # 초당 60프레임으로 업데이트
    clock.tick(60)

# 게임 종료
pygame.quit()
