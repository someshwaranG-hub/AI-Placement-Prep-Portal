/*
Problem: Merge Two Sorted Arrays
Level: Advanced
Topic: Arrays, Two Pointers, Merge Operations

Description:
Merge two sorted arrays into one sorted array.

Input:
arr1 = {1, 5, 9, 10, 15, 20}
arr2 = {2, 3, 8, 13}

Expected Output:
[1, 2, 3, 5, 8, 9, 10, 13, 15, 20]

Your Task:
1. Merge two sorted arrays
2. Result should be sorted
3. Time Complexity: O(m + n)
*/

#include <iostream>
using namespace std;

void mergeSortedArrays(int arr1[], int n1, int arr2[], int n2, int result[]) {
    int i = 0, j = 0, k = 0;
    
    while (i < n1 && j < n2) {
        if (arr1[i] <= arr2[j]) {
            result[k++] = arr1[i++];
        } else {
            result[k++] = arr2[j++];
        }
    }
    
    while (i < n1) {
        result[k++] = arr1[i++];
    }
    
    while (j < n2) {
        result[k++] = arr2[j++];
    }
}

void printArray(int arr[], int n) {
    cout << "[";
    for (int i = 0; i < n; i++) {
        cout << arr[i];
        if (i < n - 1) cout << ", ";
    }
    cout << "]" << endl;
}

int main() {
    int arr1[] = {1, 5, 9, 10, 15, 20};
    int arr2[] = {2, 3, 8, 13};
    int n1 = 6, n2 = 4;
    int merged[n1 + n2];
    
    mergeSortedArrays(arr1, n1, arr2, n2, merged);
    
    cout << "Merged array: ";
    printArray(merged, n1 + n2);
    
    return 0;
}
