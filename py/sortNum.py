
list_num = [2,20,9,10,8,1,4,6,8.1,7]
size= len(list_num)-1  #10 -1 
for a in range(size, 0,-1): #size_diff_one = 9 hence it will be (9, 0, -1)
    for x in range(0, a ,1):  
        mn = list_num[x] 
        mx = list_num[x+1]
        if mn < mx:
            list_num[x]= mx
            list_num[x+1]= mn

print(list_num)



