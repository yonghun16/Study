# receive input
number = input("input integer> ")
last_chracter = number[-1]

#if even
if last_chracter in "02468":
    print("This number is even")

#if odd
if last_chracter in "13579":
    print("This number is odd")

