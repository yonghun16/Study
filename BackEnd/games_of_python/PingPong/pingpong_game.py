import pygame
import os
import sys
import random

# 게임 스크린 크기
SCREEN_WIDTH = 480
SCREEN_HEIGHT = 640

# 색 정의
WHITE = (255, 25, 255)
BLACK = (0, 0, 0)
BLUE = (20, 60, 120)
ORANGE = (250, 170, 70)
RED = (250, 0, 0)

FPS = 60


# 공 객체 정의
class Ball():
    def __init__(self, bounce_sound):
        self.rect = pygame.Rect(int(SCREEN_WIDTH/2), int(SCREEN_HEIGHT/2), 12, 12)  # 12x12 크기의 작은 공을 화면 가운데에
        self.bounce_sound = bounce_sound
        self.dx = 0
        self.dy = 5         # 공의 방향을 아래로 하기 위해 dy를 5로 설정 
        
    # 공 업데이트
    def update(self):
        self.rect.x += self.dx
        self.rect.y += self.dy
        
        # 공이 게임 화면 왼쪽으로 넘어갈 때
        if self.rect.left < 0:
            self.dx *= -1
            self.rect.left = 0
            self.bounce_sound.play()
        
        # 공이 게임 화면 오른쪽으로 넘어갈 때
        elif self.rect.right > SCREEN_WIDTH:
            self.dx += -1
            self.rect.right = SCREEN_WIDTH
            self.bounce_sound.play()

    # 공 리셋
    def reset(self, x, y):
        self.rect.x = x
        self.rect.y = y
        self.dx = random.randint(-3, 3)
        self.dy = 5

    # 공 그리기
    def draw(self, screen):
        pygame.draw.rect(screen, ORANGE, self.rect)

# 플레이어 객체
class Player():
    def __init__(self, ping_sound):
        self.rect = pygame.Rect(int(SCREEN_WIDTH / 2), SCREEN_HEIGHT - 40, 50, 15)   # 화면 맨 아래 위치에 가로 50 세로 15 크기
        self.ping_sound = ping_sound
        self.dx = 0

    # 업데이트
    def update(self, ball):
        if self.rect.left <=0 and self.dx < 0:
            self.dx = 0
        elif self.rect.right >= SCREEN_WIDTH and self.dx > 0:
            self.dx = 0
        # 플레이어가 공이랑 충돌한 경우
        if self.rect.colliderect(ball.rect):
            ball.dx = random.randint(-5, 5)
            ball.dy *= -1
            ball.rect.bottom = self.rect.top
            self.ping_sound.play()

        self.rect.x += self.dx

    # 그리기
    def draw(self, screen):
        pygame.draw.rect(screen, RED, self.rect)

# 적 객체
class Enemy():
    def __init__(self, pong_sound):
        self.rect = pygame.Rect(int(SCREEN_WIDTH/2), 25, 50, 15)   # 화면 맨 위 위치, 가로50, 세로15
        self.pong_sound = pong_sound

    # 업데이트
    def update(self, ball):
        # 적보다 공이 왼쪽에 있을 때
        if self.rect.centerx > ball.rect.centerx:
            diff = self.rect.centerx - ball.rect.centerx
            if diff <= 4:
                self.rect.centerx = ball.rect.centerx
            else:
                self.rect.x -= 4
        # 적보다 공이 오른족에 있을 때
        if self.rect.centerx < ball.rect.centerx:
            diff = self.rect.centerx - ball.rect.centerx
            if diff <= 4:
                self.rect.centerx = ball.rect.centerx
            else:
                self.rect.x += 4
        # 적이 공과 충돌한 경우
        if self.rect.colliderect(ball.rect):
            ball.dy *= -1
            ball.rect.top = self.rect.bottom
            self.pong_sound.play()

    # 그리기
    def draw(self, screen):
        pygame.draw.rect(screen, BLACK, self.rect)


# 게임 클래스
class Game():
    def __init__(self):
        bounce_path = resource_path("assets/bounce.wav")
        ping_path = resource_path("assets/ping.wav")
        pong_path = resource_path("assets/pong.wav")
        font_path = resource_path("assets/NanumGothiCoding-Bold")
        bounce_sound = pygame.mixer.Sound(bounce_path)
        ping_sound = pygame.mixer.Sound(ping_path)
        pong_sound = pygame.mixer.Sound(pong_path)
        self.font = pygame.font.Font(font_path, 50)
        self.ball = Ball(bounce_sound)
        self.player = Player(ping_sound)
        self.enemy = Enemy(pong_sound)
        self.player_score = 0
        self.enemy_score = 0

    # 게임 이벤트 처리 및 조작
    def process_events(self):
        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                return True
            if event.type == pygame.KEYDOWN:
                if event.key == pygame.K_LEFT:
                    self.player.dx -= 5
                elif event.key == pygame.K_RIGHT:
                    self.player.dx += 5
            elif event.type == pygame.KEYUP:
                if event.key == pygame.K_LEFT or event.key == pygame.K_RIGHT:
                    self.player.dx = 0

        return False

    # 게임 로직 수행
    def run_logic(self):
        self.ball.update()
        self.player.update(self.ball)
        self.enemy.update(self.ball)

        # 공이 게임 화면 위로 넘어간 경우 (플레이어가 이긴 경우)
        if self.ball.rect.y < 0:
            self.player_score += 1
            self.ball.reset(self.player.rect.centerx, self.player.rect.centery)
        # 공이 게임 화면 아래로 넘어간 경우 (적이 이긴경우)
        elif self.ball.rect.y > SCREEN_HEIGHT:
            self.enemy_score += 1
