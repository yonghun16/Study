# Linux Network setting (with Ubuntu)

## 1. Network setting
### Network Interface setting
#### 외부 ip 주소 확인
```bash
curl ifconfig.me
```

## 2. Firewall setting
### 1. ufw를 활용한 PORT 관리
#### 1. ufw 설치 및 실행
```bash
sudo apt install ufw
sudo ufw enable
```

#### 2. ssh 포트 열기 
- ssh(22번)을 열어두지 않으면 재부팅 했을 때 ssh로 접속 불가
```bash
sudo ufw allow 22/tcp
sudo ufw allow ssh
sudo ufw reload
```

#### 3. 포트 확인
```bash
sudo ufw status
```

#### 4. 포트 열기
```bash
sudo ufw allow 8000
sudo ufw reload
```

#### 5. 포트 차단
```bash
sudo ufw deny 8000
sudo ufw reload
```
