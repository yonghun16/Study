import datetime

now = datetime.datetime.now()

if 3 <= now.month <= 5:
    print("This month is {} Spring!!".format(now.month))
if 6 <= now.month <= 8:
    print("This month is {} Summer!!".format(now.month))
if 9 <= now.month <= 11:
    print("This month is {} Summer!!".format(now.month))
if now.month == 12 or 1<= now.month <=2 :
    print("This month is {} Summer!!".format(now.month))
