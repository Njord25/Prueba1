//Variables--------//
var bills = [];
var form = document.getElementById('dataForm');
form.onsubmit = submitData;

function displayData() {
	var data = document.getElementById('list');
	var template = '<li>Name: FIRSTNAME  / Amount:  AMOUNT  / Date:  DATE  / Type:  TYPE </li>';
	var html = '';
	bills.forEach(function(allData){
		html += template
			.replace('FIRSTNAME', allData.firstname)
			.replace('DATE', allData.amount)
			.replace('AMOUNT', allData.date)
			.replace('TYPE', allData.type);
	});
	data.innerHTML = html;
	totalBills();
}

//Submit Data Function//
function submitData(event){
	event.preventDefault();
	var allData = {
		firstname: form.firstname.value,
		date: form.date.value,
		amount: parseInt(form.amount.value),
		type: form.type.value
	};

	bills.push(allData);
	form.reset();
	displayData();
}

function sortByName() {
	bills.sort(function(a, b){
    if(a.firstname < b.firstname) return -1;
    if(a.firstname > b.firstname) return 1;
    return 0;
	})
 	displayData();
}

function sortByAmount() {
	bills.sort(function(a, b){return a.amount-b.amount});

    displayData();
}

function sortByType() {
	bills.sort(function(a, b){
    if(a.type < b.type) return -1;
    if(a.type > b.type) return 1;
    return 0;
	})
displayData();
}

document.getElementById("nameOrder").addEventListener("click", sortByName);
document.getElementById("amountOrder").addEventListener("click", sortByAmount);
document.getElementById("typeOrder").addEventListener("click", sortByType);

function totalBills() {
	var aAmount = 0;
	var bAmount = 0;
	var cAmount = 0;

	for (i = 0; i < bills.length; i++) {
		if(bills[i].type == "A"){
			aAmount += bills[i].amount;
		};
	}

	for (i = 0; i < bills.length; i++) {
		if(bills[i].type == "B"){
			bAmount += bills[i].amount;
		};
	}

	for (i = 0; i < bills.length; i++) {
		if(bills[i].type == "C"){
			cAmount += bills[i].amount;
		};
	}
	document.getElementById('billsA').value = aAmount;
	document.getElementById('billsB').value = bAmount;
	document.getElementById('billsC').value = cAmount;
}
