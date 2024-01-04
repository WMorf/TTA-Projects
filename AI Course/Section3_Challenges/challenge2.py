def factorial(n):
    if n == 0:
        return 1
    else:
        return n * factorial(n - 1)
    
#Testing
print(factorial(5))


'''
Here's a breakdown of how the code works:

1. Defining a Function:
The code starts by defining a function called factorial(n). 
This function calculates the factorial of a given non-negative integer n.

2. Base Case:
The first line within the function checks for the base case: if n == 0:.
If n is 0, the function immediately returns 1. This is because the factorial of 0 is defined as 1.

3. Recursive Case:
If n is not 0, the function enters the else block. Here's what happens:
Recursive Call: The function calls itself with a slightly different input: factorial(n - 1). 
This means it's calculating the factorial of the number that's one less than n.
Multiplication: The result of this recursive call is then multiplied by n.
Returning the Result: The function returns this final value, which represents the factorial of n.

4. Tracing the Calculation:
Let's trace how the code calculates factorial(5):
The function is called with n = 5.
Since 5 is not 0, it enters the else block.
It makes a recursive call to factorial(4).
This process repeats until it reaches the base case: factorial(0), which returns 1.

Now, the recursive calls start returning values:
factorial(1) returns 1 * 1 = 1
factorial(2) returns 2 * 1 = 2
factorial(3) returns 3 * 2 = 6
factorial(4) returns 4 * 6 = 24
Finally, factorial(5) returns 5 * 24 = 120

5. Output:
The line print(factorial(5)) calls the factorial function with n = 5 and prints the returned value, which is 120.
In essence, the code uses recursion to break down the factorial calculation into smaller, self-similar subproblems, 
eventually reaching the base case and building the answer back up through multiplication.

Base Case Returns 1: When the base case factorial(0) is reached, it returns 1. 
This value becomes the starting point for the multiplication process.

Returning Values Upward: As each recursive call completes, 
it returns its calculated value to the previous call that initiated it. 
This creates a chain of values being passed back up the levels of recursion.

Multiplying with Each Return: At each level, the function multiplies the value 
returned from the lower-level call with the current value of n. This effectively 
builds the factorial value back up from the base case.

Here's a step-by-step illustration of this process for factorial(5):

Base Case: factorial(0) returns 1.
factorial(1) receives 1, multiplies it by 1 (1 * 1 = 1), and returns 1.
factorial(2) receives 1, multiplies it by 2 (1 * 2 = 2), and returns 2.
factorial(3) receives 2, multiplies it by 3 (2 * 3 = 6), and returns 6.
factorial(4) receives 6, multiplies it by 4 (6 * 4 = 24), and returns 24.

Finally, factorial(5) receives 24, multiplies it by 5 (24 * 5 = 120), and returns 120, which is the final answer.

Key Point: The multiplication happens during the return process, not during the initial recursive calls. 
Each level essentially takes the factorial value of the previous level and multiplies it by its own n value. 
This chain of multiplications, starting from the base case of 1, leads to the final result of 120 for factorial(5).
'''