# read() 함수로 텍스트 읽기

with open("basic.txt", "r") as file:
    # 파일을 읽고 출력합니다.
    contents = file.read()

print(contents)
