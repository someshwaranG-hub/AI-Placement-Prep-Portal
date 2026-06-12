"""
Problem: Check Even or Odd
Level: Beginner
Topic: Conditional Statements

Description:
Write a program that checks if a given number is even or odd.

Input: n = 7

Expected Output:
7 is Odd

Your Task:
1. Read a number from input
2. Check if it's divisible by 2
3. Print whether it's even or odd
"""

# Solution:
n = int(input("Enter a number: "))
if n % 2 == 0:
    print(f"{n} is Even")
else:
    print(f"{n} is Odd")
