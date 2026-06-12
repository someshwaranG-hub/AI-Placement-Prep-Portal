"""
Problem: Fibonacci Series
Level: Beginner
Topic: Loops and Number Patterns

Description:
Write a program to print the first n numbers in the Fibonacci series.

Input: n = 7

Expected Output:
0 1 1 2 3 5 8

Your Task:
1. Read the count of numbers to print
2. Generate Fibonacci series
3. Print all numbers separated by spaces
"""

# Solution:
n = int(input("Enter the count: "))
a, b = 0, 1
fibonacci = []

for _ in range(n):
    fibonacci.append(a)
    a, b = b, a + b

print(" ".join(map(str, fibonacci)))
