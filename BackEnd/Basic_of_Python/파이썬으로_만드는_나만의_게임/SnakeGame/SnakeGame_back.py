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
class Snake(object):
    def __init__(self):
        self.create()

    # 뱀 생성
    def create(self):
        self.length = 2
        self.positions = [ (int(SCREEN_WIDTH / 2), int(SCREEN_HEIGHT / 2)) ]
        self.direction = random.choice([UP, DOWN, LEFT, RIGHT])

    # 뱀 방향 조정
    def control(self, xy):
        if (xy[0] * -1, xy[1] * -1) == self.direction:
            return
        else:
            self.direction = xy

    # 뱀 이동
    def move(self):
        cur = self.positions[0]
        x, y = self.direction
        new = (cur[0] + (x * GRID_SIZE)), (cur[1] + (y * GRID_SIZE))

        # 뱀이 자기 몸통에 닿았을 경우 뱀 처음부터 다시 생성
        if new in self.positions[2:]:
            sleep(1)
            self.create()
        # 뱀이 게임화면을 넘어갈 경우 뱀 처음부터 다시 생성
        elif new[0] < 0 or new[0] >= SCREEN_WIDTH or \
                new[1] < 0 or new[1] >= SCREEN_HEIGHT:
            sleep(1)
            self.create()
        # 뱀이 정상적으로 이동하는 경우
        else:
            self.positions.insert(0, new)           # 현재 뱀'머리'에 새로 이동한 좌표를 추가
            if len(self.positions) > self.length:   # 추가된 뱀 길이가 현재 뱀길이 보다 길면
                self.positions.pop()                # 마지막 뱀의 꼬리를 삭제함

    # 뱀이 먹이를 먹을 때 호출
    def eat(self):
        self.length += 1

    # 뱀 그리기
    def draw(self, screen):
        red, green, blue = int(50 / (self.length - 1)), 150, int(150 / (self.length - 1))
        for i, p in enumerate(self.positions):
            color = (100 + red * i, green, blue * i)
            rect = pygame.Rect( (p[0], p[1]), (GRID_SIZE, GRID_SIZE) )
            pygame.draw.rect(screen, color, rect, 0)

# 먹이 객체
class Feed():
    def __init__(self):
        self.position = (0, 0)
        self.color = ORANGE
        self.create()

    # 먹이 생성
    def create(self):
        x = random.randint(0, int(GRID_WIDTH - 1))
        y = random.randint(0, int(GRID_HEIGHT - 1))
        self.position = x * GRID_SIZE, y * GRID_SIZE

    # 먹이 그리기
    def draw(self, screen):
        rect = pygame.Rect((self.position[0], self.position[1]), (GRID_SIZE, GRID_SIZE))
        pygame.draw.rect(screen, self.color, rect, 0)


# 게임 객체
class Game():
    def __init__(self):
        self.snake = Snake()
        self.feed = Feed()
        self.first_speed = 20

    # 게임 이벤트 처리 및 조작
    def process_events(self):
        for event in pygame.event.get():
            if event.type == pygame.QUIT:           # 종료
                return True
            elif event.type == pygame.KEYDOWN:      # 방향키 조작
                if event.key == pygame.K_UP:
                    self.snake.control(UP)
                elif event.key == pygame.K_DOWN:
                    self.snake.control(DOWN)
                elif event.key == pygame.K_LEFT:
                    self.snake.control(LEFT)
                elif event.key == pygame.K_RIGHT:
                    self.snake.control(RIGHT)
        return False

    # 게임 로직 수행
    def run_logic(self):
        self.snake.move()
        self.check_eat(self.snake, self.feed)
        self.speed = (self.first_speed + self.snake.length) / 4

    # 뱀이 먹이를 먹었는지 체크
    def check_eat(self, snake, feed):
        if snake.positions[0] == feed.position:     # 뱀의머리(position[0])의 위치가 먹이의 위치와 같다면
            snake.eat()
            feed.create()

    # 게임 정보 출력
    def draw_info(self, length, speed, screen):
        info = "길이: " + str(length) + "    " + "속도: " + str(round(speed, 2))
        font_path = resource_path("assets/NanumGothicCoding-Bold.ttf")
        font = pygame.font.Font(font_path, 26)
        text_obj = font.render(info, True, GRAY)
        text_rect = text_obj.get_rect()
        text_rect.x, text_rect.y = 10, 10
        screen.blit(text_obj, text_rect)

    # 게임 화면 및 프레임 처리
    def display_frame(self, screen):
        screen.fill(WHITE)                                      # 배경화면 하얀색으로 채우기
        self.draw_info(self.snake.length, self.speed, screen)   # 게임 정보 출력
        self.snake.draw(screen)                                 # 뱀 그리기
        self.feed.draw(screen)                                  # 먹이 그리기
        screen.blit(screen, (0, 0))                             # 변경된 화면을 반영

# 리소스 경로 설정
def resource_path(relative_path):
    try:
        base_path = sys._MEIPASS     # pyinstaller 에서 넣어줘야 되는 경로 설정값
    except Exception:
        base_path = os.path.abspath(".")
    return os.path.join(base_path, relative_path)

def main():
    # 게임 초기화
    pygame.init()
    pygame.display.set_caption('Snake Game')
    screen = pygame.display.set_mode((SCREEN_WIDTH, SCREEN_HEIGHT))
    clock = pygame.time.Clock()
    game = Game()

    # 게임 실행
    done = False
    while not done:
        done = game.process_events()        # 종료 및 방향키 이벤트
        game.run_logic()                    # 뱀 이동, 먹이, 속도 변경 로직
        game.display_frame(screen)          # 로직의 내용을 표시 될 스크린에 반영
        pygame.display.flip()               # 화면 업데이트
        clock.tick(game.speed)              # 화면 업데이트 수(깜빡임 수)를 조절 -> 속도 표현

    # 게임 종료
    pygame.quit()

if __name__ == '__main__':
    main()
