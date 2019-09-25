var fs = require('fs');
var readlineSync = require('readline-sync');

var students = [];

function loadData() {
	var fileContent = fs.readFileSync('./data.json');
	students = JSON.parse(fileContent);
}

function showMenu() {
	console.log('1. Show all students');
	console.log('2. Create new student');
	console.log('3. Save and Exit');
	var option = readlineSync.question('> ');
	switch (option) {
		case '1':
			showStudents();
			showMenu()
			break;
		case '2':
			showCreateStudent();
			console.log(students);
			showMenu()
			break;
		case '3':
			SaveandExit();
			break;
		default:
			console.log('Please choose another option');
			showMenu()
			break;
	}
}

function showStudents() {
	for (var student of students) {
		console.log(student.name, student.age);
	}
}

function showCreateStudent() {
	var name = readlineSync.question('Name: ');
	var age = readlineSync.question('Age: ');
	var student = {
		name: name,
		age: parseInt(age)
	};
	students.push(student);
}

function SaveandExit() {
	var content = JSON.stringify(students);
	fs.writeFileSync('./data.json', content, { encoding: 'utf8'});
}

function main() {
	showMenu();
	
	loadData();
}

main();