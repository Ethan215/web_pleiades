import json
#import app
#import rsa

def validate_credentials(username, password):

    f = open('accounts.json')
    accounts = json.load(f)

    for user in accounts["members"]:
        print(user["username"])
        if username == user["username"]:
            f.close()
            return True
    
    f.close()
    return False