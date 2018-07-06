def numToWord(num):

    single = ["one","two","three","four","five","six","seven","eight","nine","ten"]    
    special_case = ("eleven","twelve","thirteen","fourteen","fifteen", "sixteen", "seventeen","eighteen","nineteen")    
    double = (" ","twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety") 

    if int(num) < 11:
        return single[int(num)-1]
    elif int(num) > 19:
        d1 = int(str(num)[1])
        d2 = int(str(num)[0])-1      
        return double[d2]+" "+single[d1-1] if d1 != 0 else double[d2]
    elif int(num) <= 19 :
        return special_case[int(str(num)[1])-1]

for n in range(1):
    result = input("Enter number: ")
    print(numToWord(result))






