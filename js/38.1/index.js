/**
 * Sử dụng kiến thức đã học, tạo ra một ứng dụng danh bạ điện thoại, có các chức năng:
 * - Nhập dữ liệu contact (name, phone number)
 * - Sửa dữ liệu contact
 * - Xoá contact
 * - Tìm kiếm contact: có thể nhập vào tên (không dấu hoặc có dấu, chữ hoa hoặc chữ thường vẫn cho ra kết quả) hoặc 1 phần số điện thoại
 */
var fs = require('fs');
var readlineSync = require('readline-sync');

var contacts = [];

function loadData() {
	var fileContent = fs.readFileSync('./data.json');
	contacts = JSON.parse(fileContent);
}

function addcontact() {
	var name = readlineSync.question('Name: ');
	var phone = readlineSync.question('Phone: ');
	var contact = {
		name: name,
		phone: parseInt(phone)
	};
	contacts.push(contact);
	console.log(contacts);
}

function editcontact() {
	var i = readlineSync.question('index: ');
	console.log(contacts[i]);
	var newname = readlineSync.question('Name: ');
	var newphone = readlineSync.question('Phone: ');
	contacts[i] = {
		name: newname,
		phone: parseInt(newphone)
	};
	console.log(contacts);
}

function removecontact() {
	var i = readlineSync.question('index: ');
	console.log(contacts[i]);
	results = contacts.splice(i,1);
	console.log('contacts sau khi xoa');
	console.log(contacts);
}

// function searchcontact() {
// 	var searchitem = readlineSync.question('name or phone: ');
// 	for (var i in contacts){
// 		if (contacts[i].name == searchitem || contacts[i].phone == searchitem){
// 			console.log(i);
// 			console.log(contacts[i]);
// 		}
// 	}
// }

function searchcontact() {
	var searchitem = readlineSync.question('name or phone: ');
	for (var i in contacts){
		if (contacts[i].name == searchitem || JSON.stringify(contacts[i].phone).indexOf(searchitem) != '-1'){
			console.log(i);
			console.log(contacts[i]);
		}
	}
}

function SaveandExit() {
	var content = JSON.stringify(contacts);
	fs.writeFileSync('./data.json', content, { encoding: 'utf8'});
}

function showMenu() {
	console.log('1. Nhap contact: name, phone');
	console.log('2. Sua contact');
	console.log('3. Xoa contact');
	console.log('4. Search contact');
	console.log('5. Save and Exit');
	var option = readlineSync.question('> ');
	switch (option) {
		case '1':
			addcontact();
			showMenu()
			break;
		case '2':
			editcontact();
			showMenu()
			break;
		case '3':
			removecontact();
			showMenu()
			break;
		case '4':
			searchcontact();
			showMenu()
			break;
		case '5':
			SaveandExit();
			break;
		default:
			console.log('Please choose another option');
			showMenu()
			break;
	}
}

function main() {
	showMenu();
	
	loadData();
}

main();