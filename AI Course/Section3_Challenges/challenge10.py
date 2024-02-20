def is_anagram(str1, str2):
    return sorted(str1.lower()) == sorted(str2.lower())

#Testing
print(is_anagram("listen", "silent"))