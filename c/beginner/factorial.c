/*
Problem: Calculate Factorial
Level: Beginner
Topic: Loops and Iteration

Description:
Write a program to calculate the factorial of a given number.

Input: n = 5

Expected Output:
Factorial of 5 is 120

Your Task:
1. Read a number from input
2. Calculate factorial using loops
3. Print the result
*/

#include <stdio.h>

int main() {
    int n, i;
    long factorial = 1;
    
    printf("Enter a number: ");
    scanf("%d", &n);
    
    for (i = 1; i <= n; i++) {
        factorial *= i;
    }
    
    printf("Factorial of %d is %ld\n", n, factorial);
    
    return 0;
}
