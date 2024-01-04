def reverse_sentence(sentence):
    words = sentence.split()
    reversed_sentence = " ".join(reversed(words))
    return reversed_sentence

#Testing
print("Input a sentence")
sentence = input()
print(reverse_sentence(sentence))