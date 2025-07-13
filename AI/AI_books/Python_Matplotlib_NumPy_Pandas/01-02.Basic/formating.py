# %-formating
t = 15; s = 'Celsius'
s0 = 'Today\'s temperature is %4d[dgree %s].'%(t, s)
print(s0)
s0_1 = 'Today\'s temperature is %4d[dgree %s].'
print(s0_1%(t, s))
print()

# str.format
s2 = 'Today\'s temperature is {:4d}[dgree {:s}].'.format(t, s)
print(s2)
s2_1 = 'Today\'s temperature is {:4d}[dgree {:s}].'
print(s2_1.format(t, s))
print()

# f-string
s1 = f'Today\'s temperature is {t:4d}[dgree {s:s}].'
print(s1)
print()
