# SSL Certificate
> - Let’s Encrypt  <br />
> - duckdns (https://www.duckdns.org/)  <br />
> - nginx  <br />
> - FastApi  <br />
> - orcle cloud  <br />

### 1단계: duckdns 활성화
#### 1) 서비스 가입
- https://www.duckdns.org/ 가입
- current ip 주소를 서버 ip주소로 update

#### 2) DuckDNS에 IP 등록 + 자동 갱신 스크립트 설정
```bash
mkdir -p ~/duckdns
cd ~/duckdns

vi duck.sh
```

```bash
// duck.sh
// 아래 내용 붙여넣기 (yourdomain, yourtoken 수정)
echo url="https://www.duckdns.org/update?domains=yourdomain&token=yourtoken&ip=" | curl -k -o ~/duckdns/duck.log -K -

```

```bash
chmod 700 duck.sh
./duck.sh
```

### 2단계: acme.sh 설치 (Let’s Encrypt 클라이언트)
```bash
curl https://get.acme.sh | sh
source ~/.bashrc    (or source ~/.zshrc)
```

### 3단계: DuckDNS 방식으로 인증서 발급
#### 1) 환경변수 설정
```bash
export DuckDNS_Token="여기에_네_토큰_붙여넣기"
```

#### 2) 인증서 발급
```bash
~/.acme.sh/acme.sh --set-default-ca --server letsencrypt
~/.acme.sh/acme.sh --issue --dns dns_duckdns -d yonghun16.duckdns.org
```


### 4단계 : nginx 적용
#### 1) 설정 파일 열기
```bash
sudo vi /etc/nginx/sites-available/default
```

#### 2) 설정 파일 수정
```bash
server {
    listen 80 default_server;
    listen [::]:80 default_server;

    server_name yonghun16.duckdns.org;

    # HTTP → HTTPS 리디렉션
    return 301 https://$host$request_uri;

    ...
    // 기타 설정
    ...
}
server {
    listen 443 ssl;
    server_name yonghun16.duckdns.org;

    ssl_certificate /home/ubuntu/.acme.sh/yonghun16.duckdns.org_ecc/fullchain.cer;
    ssl_certificate_key /home/ubuntu/.acme.sh/yonghun16.duckdns.org_ecc/yonghun16.duckdns.org.key;

    location /wordle/ {
        proxy_pass http://127.0.0.1:8000/;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    }
    location /wordsearch/ {
        proxy_pass http://127.0.0.1:8001/;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    }
}
```

#### 3) nginx 재시작
```bash
sudo nginx -t
sudo systemctl reload nginx
```

