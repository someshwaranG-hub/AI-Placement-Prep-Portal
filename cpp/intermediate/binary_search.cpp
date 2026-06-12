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

#include <iostream>
using namespace std;

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
    
    cout << "Enter target to search: ";
    cin >> target;
    
    int result = binarySearch(arr, n, target);
    
    if (result != -1) {
        cout << "Element found at index: " << result << endl;
    } else {
        cout << "Element not found" << endl;
    }
    
    return 0;
}
