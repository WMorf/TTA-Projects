def find_second_smallest(numbers):
    sorted_nums = sorted(set(numbers))
    return sorted_nums[1]

#Testing
print(find_second_smallest([5, 10, 3, 8, 1]))