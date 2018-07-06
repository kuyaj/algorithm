
def add(x, y):
    return x + y

def curried_add(a):
    def inner(b):
        return add(a, b)
    return inner

