start1 = 0
start2 = 5
jump1 = 4
jump2 = 3


def kangaroo(s1,s2, j1,j2):
    n = (s1 - s2 )/ (j2 - j1)
    return "YES" if n >= 0 and int(n) else "NO"

print(kangaroo(start1, start2, jump1, jump2))
