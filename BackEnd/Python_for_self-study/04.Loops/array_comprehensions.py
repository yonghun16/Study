# 리스트 생성시 리스트 안에 for, if문 사용하기

list_a = ["사과", "자두", "초콜릿", "바나나", "체리"]

#리스트 이름 = ['표현식'  +  'for 반복자 in 반복할 수 있는 것'  +  'if 조건문']
output = [fruit for fruit in list_a if fruit != "초콜릿"]

print(output)        # ['사과', '자두', '바나나', '체리']
