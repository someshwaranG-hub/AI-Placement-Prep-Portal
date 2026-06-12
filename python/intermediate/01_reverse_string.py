"""
Problem: Reverse a String
Level: Intermediate
Topic: String Manipulation

Description:
Write a program to reverse a given string without using built-in reverse functions.

Input: "Hello World"

Expected Output:
"dlroW olleH"

Your Task:
1. Take a string as input
2. Reverse it without using reverse() or [::-1]
3. Print the reversed string
"""

# Solution:
s = input("Enter a string: ")
reversed_str = ""

for i in range(len(s) - 1, -1, -1):
    reversed_str += s[i]

print(f"Reversed: {reversed_str}")

# Alternative: Using slicing (if allowed)
# print(s[::-1])
