/*
Problem: Binary Search
Level: Intermediate
Topic: Searching Algorithms

Description:
Implement binary search to find a target element in a sorted array.

Input:
arr = {2, 5, 8, 12, 16, 23, 38, 45, 56, 67, 78}
target = 23

Expected Output:
Element found at index: 5

Your Task:
1. Implement binary search
2. Find the target in sorted array
3. Return index if found, -1 if not found
*/

#include <stdio.h>

int binarySearch(int arr[], int n, int target) {
    int left = 0, right = n - 1;
    
    while (left <= right) {
        int mid = left + (right - left) / 2;
        
        if (arr[mid] == target) {
            return mid;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    
    return -1;
}

int main() {
    int arr[] = {2, 5, 8, 12, 16, 23, 38, 45, 56, 67, 78};
    int n = sizeof(arr) / sizeof(arr[0]);
    int target;
    
    printf("Enter target to search: ");
    scanf("%d", &target);
    
    int result = binarySearch(arr, n, target);
    
    if (result != -1) {
        printf("Element found at index: %d\n", result);
    } else {
        printf("Element not found\n");
    }
    
    return 0;
}
