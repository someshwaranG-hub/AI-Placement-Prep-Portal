"""
Problem: Binary Search
Level: Intermediate
Topic: Searching Algorithms

Description:
Implement binary search to find a target element in a sorted array.

Input:
arr = [2, 5, 8, 12, 16, 23, 38, 45, 56, 67, 78]
target = 23

Expected Output:
Element found at index: 5

Your Task:
1. Implement binary search
2. Find the target in sorted array
3. Return index if found, -1 if not found
"""

# Solution:
def binary_search(arr, target):
    left, right = 0, len(arr) - 1
    
    while left <= right:
        mid = (left + right) // 2
        
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
    
    return -1

arr = [2, 5, 8, 12, 16, 23, 38, 45, 56, 67, 78]
target = int(input("Enter target to search: "))

result = binary_search(arr, target)

if result != -1:
    print(f"Element found at index: {result}")
else:
    print("Element not found")
