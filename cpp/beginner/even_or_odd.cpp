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

#include <iostream>
using namespace std;

int main() {
    int n;
    
    cout << "Enter a number: ";
    cin >> n;
    
    if (n % 2 == 0) {
        cout << n << " is Even" << endl;
    } else {
        cout << n << " is Odd" << endl;
    }
    
    return 0;
}
