// Problem 4

function isPalindrome(n) {
	return n.toString() == n.toString().split('').reverse().join('');
}