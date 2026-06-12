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

import java.util.Arrays;

public class BubbleSort {
    public static void bubbleSort(int[] arr) {
        int n = arr.length;
        
        for (int i = 0; i < n; i++) {
            boolean swapped = false;
            
            for (int j = 0; j < n - i - 1; j++) {
                if (arr[j] > arr[j + 1]) {
                    int temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                    swapped = true;
                }
            }
            
            if (!swapped) break;
        }
    }
    
    public static void main(String[] args) {
        int[] arr = {64, 34, 25, 12, 22, 11, 90};
        
        System.out.println("Original array: " + Arrays.toString(arr));
        bubbleSort(arr);
        System.out.println("Sorted array: " + Arrays.toString(arr));
    }
}
