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

#include <iostream>
using namespace std;

int main() {
    int a, b;
    
    cout << "Enter first number: ";
    cin >> a;
    
    cout << "Enter second number: ";
    cin >> b;
    
    int sum = a + b;
    cout << "Sum: " << sum << endl;
    
    return 0;
}
