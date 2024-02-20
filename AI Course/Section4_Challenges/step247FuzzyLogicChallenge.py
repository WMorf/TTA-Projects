import numpy as np
import skfuzzy as fuzz

user_input = input("Enter a value between 0 and 10: ")
input_value = float(user_input)

x = np.arange(0, 21, 1) # Input range from 0 to 20

# Define fuzzy sets for the input variable
low = fuzz.trimf(x, [0, 0, 5])
medium = fuzz.trimf(x, [2, 5, 8])
high = fuzz.trimf(x, [5, 10, 10])
#custom = fuzz.trimf(x, [3, 6, 9])

# Get membership values
low_degree = fuzz.interp_membership(x, low, input_value)
medium_degree = fuzz.interp_membership(x, medium, input_value)
high_degree = fuzz.interp_membership(x, high, input_value)

rule1 = np.fmax(low_degree, medium_degree) # if input low/medium - output is high
rule2 = np.fmin(medium_degree, high_degree) # if input is medium/high - output is low

# Determine fuzzy relation btween Input/Output
relation = np.fmax(rule1, rule2)

aggregated = np.fmax(low, relation)
activated = np.fmin(aggregated, medium)

# Defuzzify relation - obtain crisp output2
output = fuzz.defuzz(x, activated, 'centroid')

# Display crisp output
print("Output:", output)