"""
Problem: Longest Substring Without Repeating Characters
Level: Advanced
Topic: Strings, Sliding Window

Description:
Find the length of the longest substring without repeating characters.

Input: "abcabcbb"

Expected Output:
Length: 3
Substring: "abc"

Your Task:
1. Use sliding window technique
2. Find longest substring without repeating chars
3. Time Complexity: O(n)
"""

# Solution:
def longest_substring_without_repeating(s):
    char_index = {}
    max_length = 0
    start = 0
    max_start = 0
    
    for end in range(len(s)):
        if s[end] in char_index:
            start = max(start, char_index[s[end]] + 1)
        
        char_index[s[end]] = end
        
        if end - start + 1 > max_length:
            max_length = end - start + 1
            max_start = start
    
    return max_length, s[max_start:max_start + max_length]

s = "abcabcbb"
length, substring = longest_substring_without_repeating(s)
print(f"Length: {length}")
print(f"Substring: {substring}")
