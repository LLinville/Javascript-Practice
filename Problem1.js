// Problem 1

function concatenate(list) {
	var output = "";
	for(var index = 0; index<list.length;index++){
		output += list[index]+" ";
	}

	return output.trim();
}