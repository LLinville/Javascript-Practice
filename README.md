# Javascript-Practice
Intended for Purdue SIGART 2015 to use to practice Javascript stuff.
Below are problems, and you can work them out in your respective branches.

## Working with Git
Run the following command to get the repository onto your machine:
```
git clone <url>
```
where <url> is the clone URL. You should see this on the project page on the right hand side.
Once you clone the branch, you should make your own branch:
```
git checkout -b <Your Name>
```
This will allow you to work on and publish your own solutions to these exercises while allowing others to work on them as well.
Once you are done, type the following to commit:
```
git commit -m "Implemented Problems"
git push origin <Your Branch>
```
You should now see your solutions appear under your branch on github.

*Please do not publish your solutions to the master branch*

## Problem 1: Concatenating Strings
Write a function "concatenate" that takes an array of strings as a parameter, and return a string of all elements concatenated to eachother.
Each should be seperated by a space, but no space should appear on either end of the string.
Example Usage:
```
concatenate(["Hello", "World", "This", "Is", "SIGART"]); // Should return "Hello World This Is Sigart"
```
## Problem 2: Fizz Bizz
Write a function "fizzBizz" takes a number as a param and that prints to the Javascript Console that number. However, if that number is divisible by 3, print "Fizz", or if it's divizible by 5, print "Bizz". If it's divizible by both, print "FizzBizz".
Examples:
```
fizzBizz(7); // prints "7"
fizzBizz(9); // prints "Fizz"
fizzBizz(10); // prints "Bizz"
fizzBizz(15); // prints "FizzBizz"
```
## Problem 3: Fibonacci
Write a function "fib" that takes a number 'n' as a param and returns the nth fibonacci number. Note that fib(n) is defined as follows:
fib(0) = 1;
fib(1) = 1;
fib(n) = fib(n-1) + fib(n-2);
I highly recommend you implement this recurrsively. You may also assume you are working with an integer greater than or equal to 0.
Examples:
```
fib(0); // returns 1
fib(2); // returns 2
fib(5); // returns 8
```
## Problem 4: Palindrome
Write a function "isPalindrome" that takes an integer 'n' as a param and returns true/false depending on if it is a palindrome or not. Note that an integer is a palindrome if and only if it reads the same both ways. For example:
404 is a palindrome
6021 is not a palindrome because 6021 != 1206
63436 is a palindrome