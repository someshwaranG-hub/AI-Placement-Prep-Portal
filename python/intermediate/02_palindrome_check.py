"""
Problem: Check if String is Palindrome
Level: Intermediate
Topic: String Manipulation, Logic

Description:
Write a program to check if a given string is a palindrome (ignoring spaces and case).

Input: "A man a plan a canal Panama"

Expected Output:
"It is a Palindrome"

Your Task:
1. Read a string
2. Remove spaces and convert to lowercase
3. Check if it reads same forwards and backwards
4. Print result
"""

# Solution:
s = input("Enter a string: ")
clean_s = s.replace(" ", "").lower()

is_palindrome = clean_s == clean_s[::-1]

if is_palindrome:
    print("It is a Palindrome")
else:
    print("It is not a Palindrome")
