import numpy as np
import skfuzzy as fuzz

x = np.arange(0, 11, 1) # Input range from 0 to 10

# Define fuzzy sets for the input variable
low = fuzz.trimf(x, [0, 0, 5])
medium = fuzz.trimf(x, [2, 5, 8])
high = fuzz.trimf(x, [5, 10, 10])

rule1 = np.fmax(low, medium) # if input low/medium - output is high
rule2 = np.fmin(medium, high) # if input is medium/high - output is low

# Determine fuzzy relation btween Input/Output
relation = np.fmax(rule1, rule2)

# Defuzzify relation - obtain crisp output
output = fuzz.defuzz(x, relation, 'centroid')

# Display crisp output
print("Output:", output)