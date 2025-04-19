# Firewall setting

### PORT

#### 포트 확인 
```bash
sudo ufw status
```

#### 포트 열기
```bash
sudo ufw allow 8000
sudo ufw enable
```

#### 포트 차단
```bash
sudo ufw deny 8000
sudo ufw reload
```
