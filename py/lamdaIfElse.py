words = ["hate","love","fate"]

wordsToSay = lambda w: words[0] if w > 5 else words[1]

x = input()
print(wordsToSay(x))



