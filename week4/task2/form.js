var heading=document.createElement('h1');
heading.setAttribute('class','header');
heading.innerText="FORM SUBMISSION"


var wrapper=document.createElement('div');
wrapper.setAttribute('class','wrapper');


var form=document.createElement('form');
form.setAttribute('onsubmit','submitted()');


var label1=document.createElement('label');
label1.setAttribute('for','fname')
label1.innerText="First Name"

var ip1=document.createElement('input');
ip1.setAttribute('type','text');
ip1.setAttribute('name','fname');

var label2=document.createElement('label');
label2.setAttribute('for','lname')
label2.innerText="Last Name"

var ip2=document.createElement('input');
ip2.setAttribute('type','text');
ip2.setAttribute('name','lname');


var label3=document.createElement('label');
label3.setAttribute('for','address')
label3.innerText="Address"

var ip3=document.createElement('input');
ip3.setAttribute('type','text');
ip3.setAttribute('name','address');

var label4=document.createElement('label');
label4.setAttribute('for','pincode')
label4.innerText="Pincode";

var ip4=document.createElement('input');
ip4.setAttribute('type','number');
ip4.setAttribute('name','pincode');

var label5=document.createElement('label');
label5.setAttribute('for','gender')
label5.innerText="Gender"

var ip5=document.createElement('input');
ip5.setAttribute('type','text');
ip5.setAttribute('name','gender');


var label6=document.createElement('label');
label6.setAttribute('for','food')
label6.innerText="Food";

var ip6=document.createElement('input');
ip6.setAttribute('type','text');
ip6.setAttribute('name','food');

var label7=document.createElement('label');
label7.setAttribute('for','state');
label7.innerText="State"

var ip7=document.createElement('input');
ip7.setAttribute('type','text');
ip7.setAttribute('name','state');


var label8=document.createElement('label');
label8.setAttribute('for','country');
label8.innerText="Country";

var ip8=document.createElement('input');
ip8.setAttribute('type','text');
ip8.setAttribute('name','country');

var submitButton=document.createElement('button');
submitButton.setAttribute('id','button');
submitButton.innerText="Submit"

var breaker=document.createElement('br');

var breaker1=document.createElement('br');

var breaker2=document.createElement('br');

var breaker3=document.createElement('br');

var breaker4=document.createElement('br');

var breaker5=document.createElement('br');

var breaker6=document.createElement('br');

var breaker7=document.createElement('br');


var headings=document.createElement('div');
headings.setAttribute('id','tableHeadings');

var h1=document.createElement('div');
h1.setAttribute('id','h1');
h1.innerText="First Name";


var h2=document.createElement('div');
h2.setAttribute('id','h2');
h2.innerText="Last Name";


var h3=document.createElement('div');
h3.setAttribute('id','h3');
h3.innerText="Address";


var h4=document.createElement('div');
h4.setAttribute('id','h4');
h4.innerText="Pincode";


var h5=document.createElement('div');
h5.innerText="Gender";


var h6=document.createElement('div');
h6.innerText="Food";


var h7=document.createElement('div');
h7.innerText="State";


var h8=document.createElement('div');
h8.setAttribute('id','h8');
h8.innerText="Country";


var resultTable=document.createElement('table');
resultTable.setAttribute('id','myTable');


document.body.append(heading);
document.body.append(wrapper);
wrapper.append(form);
form.append(label1)
form.append(ip1);
form.append(breaker);
form.append(label2);
form.append(ip2);
form.append(breaker1);
form.append(label3);
form.append(ip3);
form.append(breaker2);
form.append(label4);
form.append(ip4);
form.append(breaker3);
form.append(label5);
form.append(ip5);
form.append(breaker4);
form.append(label6);
form.append(ip6);
form.append(breaker5);
form.append(label7);
form.append(ip7);
form.append(breaker6);
form.append(label8);
form.append(ip8);
form.append(breaker7);
form.append(submitButton);

document.body.append(headings);
headings.append(h1);
headings.append(h2);
headings.append(h3);
headings.append(h4);
headings.append(h5);
headings.append(h6);
headings.append(h7);
headings.append(h8);

document.body.append(resultTable);

function submitted(){
   event.preventDefault();
   var table = document.getElementById("myTable");
   var row = table.insertRow(0);
   var cell1 = row.insertCell(0);
   var cell2 = row.insertCell(1);
   var cell3 = row.insertCell(2);
   var cell4 = row.insertCell(3);
   var cell5 = row.insertCell(4);
   var cell6 = row.insertCell(5);
   var cell7 = row.insertCell(6);
   var cell8 = row.insertCell(7);
   cell1.innerHTML = ip1.value;
   cell2.innerHTML = ip2.value;
   cell3.innerHTML = ip3.value;
   cell4.innerHTML = ip4.value;
   cell5.innerHTML = ip5.value;
   cell6.innerHTML = ip6.value;
   cell7.innerHTML = ip7.value;
   cell8.innerHTML = ip8.value;
}



/*function myCreateFunction() {
   var table = document.getElementById("myTable");
   var row = table.insertRow(0);
   var cell1 = row.insertCell(0);
   var cell2 = row.insertCell(1);
   cell1.innerHTML = "NEW CELL1";
   cell2.innerHTML = "NEW CELL2";
 }*/