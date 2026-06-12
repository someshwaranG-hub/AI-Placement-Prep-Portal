/*
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
*/

#include <iostream>
#include <algorithm>
using namespace std;

void bubbleSort(int arr[], int n) {
    for (int i = 0; i < n; i++) {
        bool swapped = false;
        
        for (int j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr[j], arr[j + 1]);
                swapped = true;
            }
        }
        
        if (!swapped) break;
    }
}

int main() {
    int arr[] = {64, 34, 25, 12, 22, 11, 90};
    int n = sizeof(arr) / sizeof(arr[0]);
    
    cout << "Original array: ";
    for (int i = 0; i < n; i++) cout << arr[i] << " ";
    cout << endl;
    
    bubbleSort(arr, n);
    
    cout << "Sorted array: ";
    for (int i = 0; i < n; i++) cout << arr[i] << " ";
    cout << endl;
    
    return 0;
}
