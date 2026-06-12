"""
Problem: Merge Two Sorted Arrays
Level: Advanced
Topic: Arrays, Two Pointers, Merge Operations

Description:
Merge two sorted arrays into one sorted array without using extra space.

Input:
arr1 = [1, 5, 9, 10, 15, 20]
arr2 = [2, 3, 8, 13]

Expected Output:
[1, 2, 3, 5, 8, 9, 10, 13, 15, 20]

Your Task:
1. Merge two sorted arrays
2. Result should be sorted
3. Time Complexity: O(m + n)
4. Space Complexity: O(1) if possible
"""

# Solution:
def merge_sorted_arrays(arr1, arr2):
    result = []
    i, j = 0, 0
    
    while i < len(arr1) and j < len(arr2):
        if arr1[i] <= arr2[j]:
            result.append(arr1[i])
            i += 1
        else:
            result.append(arr2[j])
            j += 1
    
    result.extend(arr1[i:])
    result.extend(arr2[j:])
    
    return result

arr1 = [1, 5, 9, 10, 15, 20]
arr2 = [2, 3, 8, 13]

merged = merge_sorted_arrays(arr1, arr2)
print("Merged array:", merged)
