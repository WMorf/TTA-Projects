import pandas as pd

#Load the contents of the CSV file named 'grades.csv' into a DataFrame using pandas
data = pd.read_csv(r"C:/Users/WesMo/Documents/GitHub/TTA-Projects/AI Course/grades.csv")

#Calculate the average grade for each student
average_grades = data.groupby('Student Name')['Grade'].mean()

#Calculate and display the maximum grade in the class
max_grade = data['Grade'].max()
print("Highest grade in the class: ", max_grade)

#Calculate and display the minimum grade in the class
min_grade = data['Grade'].min()
print("Lowest grade in the class: ", min_grade)

#Calculate and display the overall class average
class_average = data['Grade'].mean()
print("Average grade of the class: ", class_average)

#Create a new column called “Pass/Fail” that indicates whether each student passed or failed
data['Pass/Fail'] = data['Grade'].apply(lambda x: 'Pass' if x >= 60 else 'Fail')

#Count the number of students who passed and failed
pass_count = data[data['Pass/Fail'] == 'Pass'].shape[0]
fail_count = data[data['Pass/Fail'] == 'Fail'].shape[0]

print("Number of students passed:", pass_count)
print("Number of students failed:", fail_count)
