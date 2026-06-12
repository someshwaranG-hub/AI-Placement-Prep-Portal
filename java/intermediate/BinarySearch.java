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

import java.util.Scanner;

public class BinarySearch {
    public static int binarySearch(int[] arr, int target) {
        int left = 0, right = arr.length - 1;
        
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
    
    public static void main(String[] args) {
        int[] arr = {2, 5, 8, 12, 16, 23, 38, 45, 56, 67, 78};
        Scanner sc = new Scanner(System.in);
        
        System.out.print("Enter target to search: ");
        int target = sc.nextInt();
        
        int result = binarySearch(arr, target);
        
        if (result != -1) {
            System.out.println("Element found at index: " + result);
        } else {
            System.out.println("Element not found");
        }
        
        sc.close();
    }
}
