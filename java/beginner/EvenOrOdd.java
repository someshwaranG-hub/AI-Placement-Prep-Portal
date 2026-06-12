/*
Problem: Check Even or Odd
Level: Beginner
Topic: Conditional Statements

Description:
Write a program that checks if a given number is even or odd.

Input: n = 7

Expected Output:
7 is Odd

Your Task:
1. Read a number from input
2. Check if it's divisible by 2
3. Print whether it's even or odd
*/

import java.util.Scanner;

public class EvenOrOdd {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        System.out.print("Enter a number: ");
        int n = sc.nextInt();
        
        if (n % 2 == 0) {
            System.out.println(n + " is Even");
        } else {
            System.out.println(n + " is Odd");
        }
        
        sc.close();
    }
}
