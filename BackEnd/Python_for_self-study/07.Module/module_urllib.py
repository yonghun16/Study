# 모듈을 읽어 들입니다.
# urllib 모듈은 'URL을 다루는 라이브러리'입니다.
# 네트워크의 자원이 어디에 위치 하는지 확인 할 때 자주 사용됨.
# urlopen() : URL 주소의 페이지를 열어주는 함수
# read() 해당 웹 페이지에 있는 내용을 읽어서 가져옴 

from urllib import request

# urlopen() 함수로 구글의 메인 페이지를 읽습니다.
target = request.urlopen("https://google.com")
output = target.read()

# 출력합니다.
print(output)
