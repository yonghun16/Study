choice = 0
distance = 0
def miles2km(input_miles):
    return input_miles*1.6

def km2miles(input_km):
    return input_km/1.6

print("무엇을 변환할까요? 1(miles -> km), 2(km -> miles)")
choice = int(input("변환 숫자 입력: "))
distance = int(input("변환 할 거리 입력: "))

if(choice == 1 ):
    print(miles2km(distance), "km")
else:
    print(km2miles(distance), "miles")
