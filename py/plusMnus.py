getPositive = lambda numbers, length : round(len([n for n in numbers if n > 0 ])/length, 3)
getNegative = lambda numbers, length : round(len([n for n in numbers if n < 0 ])/length, 3)
getZeroes =   lambda numbers, length : round(len([n for n in numbers  if n == 0])/length, 3)

def get_positive(numbers, length):
    positive = []
    for n in numbers:
        if n > 0:
            positive.append(n)
    return round(len(positive)/length, 3)

def get_negative(numbers, length):
    negative = []
    for n in numbers:
        if n < 0:
            negative.append(n)
    return round(len(negative)/length, 3)

def get_zeroes(numbers, length):
    zeroes = []
    for n in numbers:
        if n == 0:
            zeroes.append(n)
    return round(len(zeroes)/length, 3)


numbers = [-4, 3, -9, 0, 4, 1]
length = 6

print(get_positive(numbers, length))
print(get_negative(numbers, length))
print(get_zeroes(numbers, length))

