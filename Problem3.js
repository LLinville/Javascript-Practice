// Problem 3

function fib(n) {
	var a = 0;
	var b = 1;
	for(var i=2;i<n+2;i++){
		var temp = a;
		a=b;
		b=temp+b
	}
	return b;
}