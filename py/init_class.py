class Complex:
    def __init__(self, x, y):
        self.a = x
        self.b = y
        self.rt = self.a ** 2 + self.b + 10 
     

q = input("1: ")
w = input("2: ")

print("\n")

print Complex(q,w).rt
