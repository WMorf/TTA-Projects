def sort_by_length(strings):
    return sorted(strings, key=len)

#Testing
print(sort_by_length(["apple","banana","blueberry", "date"]))