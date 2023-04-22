#딕셔너리를 선언합니다.
dictionary = {
    "name": "7D 건조 망고",
    "type": "당절임",
    "ingredient": ["망고", "설탕", "메타중아황산나트륨", "치자황색소"],
    "origin": "필리핀"
}

#for 반복문을 사용합니다.
for key in dictionary:
    #출력합니다.
    print(key, ":", dictionary[key])


#리스트와의 차이
list_a = ["a", "b", "c"]

for i in list_a:
    #출력합니다.
    print(i)

