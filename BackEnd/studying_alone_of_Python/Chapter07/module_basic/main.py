# main.py 파일

import test_module as test      # test란 객체로 test_module를 불러옴

radius = test.number_input()
print(test.get_circumference(radius))
print(test.get_circle_area(radius))
