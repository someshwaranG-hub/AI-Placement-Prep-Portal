"""
Problem: Bubble Sort
Level: Intermediate
Topic: Sorting Algorithms

Description:
Implement bubble sort algorithm to sort an array in ascending order.

Input: [64, 34, 25, 12, 22, 11, 90]

Expected Output:
[11, 12, 22, 25, 34, 64, 90]

Your Task:
1. Implement bubble sort
2. Sort array in ascending order
3. Print sorted array
"""

# Solution:
def bubble_sort(arr):
    n = len(arr)
    
    for i in range(n):
        swapped = False
        for j in range(0, n - i - 1):
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
                swapped = True
        
        if not swapped:
            break
    
    return arr

arr = [64, 34, 25, 12, 22, 11, 90]
print("Original array:", arr)
sorted_arr = bubble_sort(arr.copy())
print("Sorted array:", sorted_arr)
