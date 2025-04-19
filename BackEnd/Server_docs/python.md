## python 

### 가상환경 활성화
```bash
source bin/activate
```

### uvicorn 서버실행
```bash
nohup uvicorn main:app --host 0.0.0.0 --port 8000 > output.log 2>&1 &
```

### uvicorn 서버 종료
```bash
ps aux | grep uvicorn
pkill -f "uvicorn main:app"
```

### uvicorn 프로세스 확인
```bash
ps aux | grep uvicorn
sudo lsof -i -P -n | grep LISTEN | grep uvicorn
```
