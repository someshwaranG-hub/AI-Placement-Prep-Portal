/*
Problem: Factorial
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

#include <iostream>
using namespace std;

int main() {
    int n;
    long factorial = 1;
    
    cout << "Enter a number: ";
    cin >> n;
    
    for (int i = 1; i <= n; i++) {
        factorial *= i;
    }
    
    cout << "Factorial of " << n << " is " << factorial << endl;
    
    return 0;
}
