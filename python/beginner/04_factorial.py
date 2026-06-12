"""
Problem: Calculate Factorial
Level: Beginner
Topic: Loops and Iteration

Description:
Write a program to calculate the factorial of a given number.

Input: n = 5

Expected Output:
Factorial of 5 is 120

Your Task:
1. Read a number from input
2. Calculate factorial using loops
3. Print the result
"""

# Solution:
n = int(input("Enter a number: "))
factorial = 1

for i in range(1, n + 1):
    factorial *= i

print(f"Factorial of {n} is {factorial}")
