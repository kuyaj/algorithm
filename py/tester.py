from code import payment_calc

foods = ["Hotdog","Soda","Chicken","Rice"]

prices = []

print("\n")

for p in foods:
    q = input(p+": ")
    prices.append(q)

print("\n")
print(payment_calc(prices).show_sum)
