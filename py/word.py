
count_vowels = lambda word: str(len([
        letter for letter in word 
        if letter.lower() in 'aeiou'
    ]))

def letter(word):
    return map(
        lambda letter: letter 
        if letter not in 'aeiou' 
        else count_vowels(word),
        list(word))

xchange_vowels = lambda word: "".join(letter(word))

# def change_vowels(word):
#     new_word = []
#     for letter in word:
#         if letter.lower() not in 'aeiou':
#             new_word.append(letter)
#         else:
#             new_word.append(count_vowels(word))
#     return "".join(new_word)


user_input = input("Enter word: ")
print(xchange_vowels(user_input))



