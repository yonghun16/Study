## 설치
###  도커를 통한 레디스 설치
```bash
docker run --name my-redis -p 6379:6379 -d redis
```

### 테스트
```bash
docker exec -it my-redis redis-cli ping
```

### 파이썬
```bash
pip3 install redis             // 또는
python3 -m pip install redis
```
