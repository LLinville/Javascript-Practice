// Problem 5

function student(name, gradeLevel, gpa, creditHours) {
	this.name = name;
	this.gradeLevel = gradeLevel;
	this.gpa = gpa;
	this.creditHours = creditHours;

	this.addSemesterGPA = function(semesterGPA, creditHours){
		this.gpa = (this.gpa*this.creditHours + semesterGPA*creditHours)/(creditHours+this.creditHours);
		this.creditHours += creditHours;
	}

	return this;
}