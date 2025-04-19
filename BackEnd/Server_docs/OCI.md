# 🚀 오라클 클라우드에서 새 인스턴스 생성하기 (단계별 안내)

### 목차
1. 인스턴스 생성
2. SSH 접속
3. 방화벽 설정

## 인스턴스 생성
#### 1. 콘솔 접속
- https://cloud.oracle.com 접속
- 로그인

#### 2. Compute 인스턴스 만들기 시작
- 좌측 상단 메뉴 클릭 ☰ → Compute > Instances 클릭
- 우측 상단에 있는 “Create Instance” (인스턴스 생성) 클릭

#### 3. 인스턴스 이름 정하기
- Name: 원하는 인스턴스 이름 입력 (예: my-free-vm)

#### 4. 이미지(운영체제) 선택
- 기본은 Oracle Linux지만, 바꾸고 싶다면:
- Change Image and Shape 클릭
  - Ubuntu, CentOS, Debian 등 선택 가능

#### 5. 인스턴스 Shape 선택 (Always Free 사용 시)
- Shape 탭에서 Change Shape 클릭
- VM.Standard.A1.Flex (ARM 기반) (추천)
  - Always Free 자원에서 무료로 제공되는 인스턴스
  - OCPU: 1, Memory: 1GB ~ 6GB, 1 Gbps network bandwidth
→ 예: 1 OCPU, 6GB RAM (Free 티어 내 최대)
- VM.Standard.E2.1.Micro (x86 기반)
  - Always Free 자원에서 무료로 제공되는 인스턴스
  - OCPU: 1, Memory: 1GB, 0.48 Gbps network bandwidth

#### 6. 네트워크 설정
- 기본으로 생성된 VCN과 Subnet 선택하거나 새로 생성
- Public IP 지정을 **“할당”**으로 설정 (인터넷 접속용)

#### 7. SSH 키 설정 (중요)
- 접속할 때 사용할 SSH 공개 키(Public Key) 필요
- “Generate SSH Key pair” 눌러 생성 → 다운로드 꼭 저장!

#### 8. 부트 볼륨 설정 (선택)
- 보통 기본 설정 사용 (46GB)
- 나중에 Terminate해도 복구하려면 → “Preserve boot volume” 체크 가능

#### 9. 고급 설정 (선택)
- 필요 시 Cloud-init Script, Shielded Instance, Tags 등 설정 가능

#### 10. 생성!
- 모든 설정 확인 후 “Create” 클릭
- 잠시 기다리면 인스턴스가 생성되고 상태가 “Running”으로 바뀜
- 설치 끝.

## SSH 접속
#### 1. ssh 명령어
- ssh를 통해 생성된 인스턴스의 퍼블릭 IP로 접속:
```bash
ssh -i ~/.ssh/your_private_key.pem ubuntu@<퍼블릭 IP 주소>
```

#### 2. 간편하게 접속
- ssh HostName 으로 접속하기 위해서는 openssh 설치 후 ./ssh/config 파일 설정이 필요함.
```bash
brew install openssh
```
```sh
# .ssh/config

# CodeSandbox SSH Integration
Include "csb/config"
# End of CodeSandbox SSH Integration

Host myserver
    HostName 122.122.112.121                    # server address
    User ubuntu                                 # user name
    IdentityFile ~/.ssh/ssh-keys/myserver.key   # ssh-key 경로
```
```bash
ssh myserver
```


## 방화벽 설정 
#### 1. 오라클 콘솔에서 VCN 보안 목록 열기
- 오라클 클라우드 콘솔 → 메뉴 클릭
- 네트워킹 > 가상 클라우드 네트워크 (VCN) 클릭
- default_vcn 클릭 (스크린샷에 나와 있는 VCN 이름)
- 왼쪽 메뉴에서 보안 목록 (Security Lists) 클릭
- 보통 default security list for default_vcn 클릭

#### 2. 인바운드 규칙에 HTTP(80) 추가
- 클릭한 보안 목록 페이지에서 아래 규칙을 추가:
    - Source CIDR: 0.0.0.0/0
    - IP Protocol: TCP
    - Destination Port Range: 80
- 같은 방식으로 HTTPS(443)도 필요하면 추가:
    - Destination Port Range: 443
