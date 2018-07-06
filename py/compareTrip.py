

def solve(a, b):
    # A = (1 if a[0] > b[0] else 0) + (1 if a[1] > b[1] else 0) + (1 if a[2] > b[2] else 0)
    # B = (1 if b[0] > a[0] else 0) + (1 if b[1] > a[1] else 0) + (1 if b[2] > a[2] else 0)

    iG = lambda a, b: 1 if a > b else 0
    A = iG(a[0], b[0]) + iG(a[1], b[1]) + iG(a[2], b[2])
    B = iG(b[0], a[0]) + iG(b[1], a[1]) + iG(b[2], a[2])
    return [A,B]

print(solve([1,8,9],[3,9,10]))
print(solve([2,7,12],[5,9,9]))

#[0,3]
#[1,2]