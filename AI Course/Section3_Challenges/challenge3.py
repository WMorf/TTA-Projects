def count_vowels(string):
    vowels = "aeiou"
    count = 0
    for char in string:
        if char.lower() in vowels:
            count += 1
    return count

#Testing
input_string = input()
result = count_vowels(input_string)
print("Number of vowels: ", result)