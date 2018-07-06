groceries = ['apple', 'banana', 'orange','strawberries','cherries']
basket = []

def get_groceries():
    for item in groceries:
        if item not in basket:
            basket.append(item)
        print(basket)

def buy_groceries():
    total = 0
    for item in basket:
        total += len(item)
    print(total)
        
print(get_groceries())
print(buy_groceries())

# def get_groceries(groceries, basket):
#     if not groceries:
#         return basket
#     return get_groceries(groceries[1:], basket + [groceries[0]])


# def buy_item(item):
#     return len(item)

# def buy_groceries(basket):
#     return sum(map(buy_item, basket))


# print(buy_groceries(get_groceries(['apple', 'banana', 'orange','strawberries','cherries'], [])))



