// Problem 2

function fizzBizz(num) {
	if(num%3!=0 && num%5!=0){
		return num;
	}

	output = ""
	if(num%3==0){
		output+="Fizz"
	}

	if(num%5==0){
		output+="Bizz"
	}
	return output;
}