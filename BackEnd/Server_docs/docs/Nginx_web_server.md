# Nginx 설치 과정 (with Ubuntu)



### 1. SSH로 인스턴스에 접속
```bash
ssh -i /path/to/your/private-key.pem ubuntu@your-public-ip
```

### 2. Nginx 설치
```bash
sudo apt update
sudo apt install nginx
```

### 3. Nginx 서비스 시작
```bash
sudo systemctl start nginx
sudo systemctl restart nginx    # 재시작 명령어
```

### 4. Nginx 서비스 자동 시작 설정
```bash
sudo systemctl enable nginx
```

### 5. Nginx 상태 확인
```bash
sudo systemctl status nginx
```

### 6. 방화벽 설정(필요한 경우)
```bash
sudo ufw allow 'Nginx Full'
```

### 7. 설정파일 
```bash
sudo vim /etc/nginx/sites-available/default
```
