def is_authenticated(user, passw):
    return verify_password(user, passw)

is_auth = lambda user, passw: verify_password(user, passw)

def verify_password(user, passw):     
    users =  ["angelo","steve","leona"]
    passwords =  ["2324","gogo","kokobap"]

    if user in users:
        if passw in passwords:
            return True

user = input("Enter user: ")
passw = input("Enter password: ")
    
if is_auth(user, passw):
    print("Login success!")
else:
    print("Wrong Password!")

