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

import java.util.Arrays;

public class MergeSortedArrays {
    public static int[] mergeSortedArrays(int[] arr1, int[] arr2) {
        int[] result = new int[arr1.length + arr2.length];
        int i = 0, j = 0, k = 0;
        
        while (i < arr1.length && j < arr2.length) {
            if (arr1[i] <= arr2[j]) {
                result[k++] = arr1[i++];
            } else {
                result[k++] = arr2[j++];
            }
        }
        
        while (i < arr1.length) {
            result[k++] = arr1[i++];
        }
        
        while (j < arr2.length) {
            result[k++] = arr2[j++];
        }
        
        return result;
    }
    
    public static void main(String[] args) {
        int[] arr1 = {1, 5, 9, 10, 15, 20};
        int[] arr2 = {2, 3, 8, 13};
        
        int[] merged = mergeSortedArrays(arr1, arr2);
        System.out.println("Merged array: " + Arrays.toString(merged));
    }
}
