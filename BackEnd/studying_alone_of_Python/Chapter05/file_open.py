# 파일을 엽니다.
file = open("basic.txt", "w")

#파일에 텍스트를 씁니다.
file.write("Hello Python Programming...!")

#파일을 닫습니다.
file.close()

# 파일을 엽니다.(with 구문이 종료될 때 자동으로 파일이 닫힘)
with open("basic.txt", "w") as file:
    #파일에 텍스트를 씁니다.
    file.write("Hello Python Programming...!")
