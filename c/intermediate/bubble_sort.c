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

#include <stdio.h>

void bubbleSort(int arr[], int n) {
    int i, j, temp;
    
    for (i = 0; i < n; i++) {
        int swapped = 0;
        
        for (j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                swapped = 1;
            }
        }
        
        if (!swapped) break;
    }
}

void printArray(int arr[], int n) {
    for (int i = 0; i < n; i++) {
        printf("%d ", arr[i]);
    }
    printf("\n");
}

int main() {
    int arr[] = {64, 34, 25, 12, 22, 11, 90};
    int n = sizeof(arr) / sizeof(arr[0]);
    
    printf("Original array: ");
    printArray(arr, n);
    
    bubbleSort(arr, n);
    
    printf("Sorted array: ");
    printArray(arr, n);
    
    return 0;
}
