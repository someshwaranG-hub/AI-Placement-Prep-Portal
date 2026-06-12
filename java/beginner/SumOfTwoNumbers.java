/*
Problem: Sum of Two Numbers
Level: Beginner
Topic: Variables and Arithmetic Operations

Description:
Write a program that takes two numbers as input and prints their sum.

Input:
a = 5
b = 10

Expected Output:
15

Your Task:
1. Read two numbers from input
2. Calculate their sum
3. Print the result
*/

import java.util.Scanner;

public class SumOfTwoNumbers {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        System.out.print("Enter first number: ");
        int a = sc.nextInt();
        
        System.out.print("Enter second number: ");
        int b = sc.nextInt();
        
        int sum = a + b;
        System.out.println("Sum: " + sum);
        
        sc.close();
    }
}
