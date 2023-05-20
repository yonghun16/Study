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
        self.rect = pygame.Rect(int(SCREEN_WIDTH/2), int(SCREEN_HEIGHT/2), 12, 12)
        self.bounce_sound = bounce_sound
        self.dx = 0
        self.dy = 5
        
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
elif self.rct.right > SCREEN_WIDTH: