import random
import string

def generate_password(length=12):
    if length < 6:
        raise ValueError("Password length should be at least 6 characters.")

    characters = string.ascii_letters + string.digits + string.punctuation

    password = [
        random.choice(string.ascii_lowercase),
        random.choice(string.ascii_uppercase),
        random.choice(string.digits),
        random.choice(string.punctuation)
    ]

    password += random.choices(characters, k=length - 4)

    random.shuffle(password)

    return ''.join(password)

if __name__ == "__main__":
    print("Welcome to the Random Password Generator!")
    try:
        length = int(input("Enter the desired password length (default is 12): ") or 12)
        print("Your generated password is:", generate_password(length))
    except ValueError as e:
        print("Error:", e)
