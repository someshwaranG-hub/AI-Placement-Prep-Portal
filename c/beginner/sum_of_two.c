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
Sum: 15

Your Task:
1. Read two numbers from input
2. Calculate their sum
3. Print the result
*/

#include <stdio.h>

int main() {
    int a, b, sum;
    
    printf("Enter first number: ");
    scanf("%d", &a);
    
    printf("Enter second number: ");
    scanf("%d", &b);
    
    sum = a + b;
    printf("Sum: %d\n", sum);
    
    return 0;
}
