class Person:
    ages = [15,17,9,7,20,19,5]

    value = lambda age: "Age: "+str(age) if age > 10 else "Age: "+str(age-1)

    # for o in map(value, ages):
    #     print o
    
    for p in [value(x) for x in ages]:
        print(p)
