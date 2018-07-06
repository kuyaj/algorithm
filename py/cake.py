import heapq
from functools import reduce

candles = [3, 2, 1, 5,5,5, 3] 

#using lambda and list comprehension
get_highest_num = lambda arr: len([e for e in arr if e == max(arr)])


#using functional reduce
vget_highest_num = lambda arr: reduce(max, arr)

#imperative version
def xget_highest_num(arr):
    ar = []
    for e in arr:
        if e is max(arr):
            ar.append(e)
    return len(ar)


print(vget_highest_num(candles))
