from functools import partial

def add(x, y):
    return x + y

def add1(num):
    return add(1, num)

add = partial(add, 1)

print(add(3))       
print(add(4))  
print(add(5)) 