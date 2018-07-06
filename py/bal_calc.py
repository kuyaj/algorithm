def calculate_balance(account_list):
    return sum(account_list)

calc_bal = lambda accnt_lst : sum(accnt_lst) 


pay_list = []

foods = {
    "siomai": 55.00,
    "hotdog": 30.00,
    "pizza": 140.00,
    "burger": 215.00
    }

for brandname, price in foods.items():
    pay_list.append(price)

print(calc_bal(pay_list))








