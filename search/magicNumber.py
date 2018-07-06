magicNumber = 32
tries = 0
maxTries = 5

while True :

    if tries == maxTries:
        print "Game over!"
        break
    
    answer = int(input("What is the magic number? :"))
    cl
    if answer == magicNumber:
        print "You win!"
        break
    elif answer > magicNumber:
        print "Your answer is greater than the magic number."
    else:
        print "Your answer is lower than the magic number."

    



    





