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


var divRow1=document.createElement('div');
divRow1.setAttribute('class','row');
divRow1.setAttribute('id','dataSet');

var divCol1=document.createElement('div');
divCol1.setAttribute('class','col-1');
divCol1.innerText="First Name";

var divCol2=document.createElement('div');
divCol2.setAttribute('class','col-1');
divCol2.innerText="Last Name";

var divCol3=document.createElement('div');
divCol3.setAttribute('class','col-1');
divCol3.innerText="Address";

var divCol4=document.createElement('div');
divCol4.setAttribute('class','col-1');
divCol4.innerText="Pincode";

var divCol5=document.createElement('div');
divCol5.setAttribute('class','col-1');
divCol5.innerText="Gender";

var divCol6=document.createElement('div');
divCol6.setAttribute('class','col-1');
divCol6.innerText="Food";

var divCol7=document.createElement('div');
divCol7.setAttribute('class','col-1');
divCol7.innerText="State";

var divCol8=document.createElement('div');
divCol8.setAttribute('class','col-1');
divCol8.innerText="Country";

var divRow2=document.createElement('div');
divRow2.setAttribute('class','row');
divRow2.setAttribute('id','dataSet2');

var divCol9=document.createElement('div');
divCol9.setAttribute('class','col-1');
divCol9.innerText="First Name";

var divCol10=document.createElement('div');
divCol10.setAttribute('class','col-1');
divCol10.innerText="Last Name";

var divCol11=document.createElement('div');
divCol11.setAttribute('class','col-1');
divCol11.innerText="Address";

var divCol12=document.createElement('div');
divCol12.setAttribute('class','col-1');
divCol12.innerText="Pincode";

var divCol13=document.createElement('div');
divCol13.setAttribute('class','col-1');
divCol13.innerText="Gender";

var divCol14=document.createElement('div');
divCol14.setAttribute('class','col-1');
divCol14.innerText="Food";

var divCol15=document.createElement('div');
divCol15.setAttribute('class','col-1');
divCol15.innerText="State";

var divCol16=document.createElement('div');
divCol16.setAttribute('class','col-1');
divCol16.innerText="Country";

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


document.body.append(divRow1);
divRow1.append(divCol1);
divRow1.append(divCol2);
divRow1.append(divCol3);
divRow1.append(divCol4);
divRow1.append(divCol5);
divRow1.append(divCol6);
divRow1.append(divCol7);
divRow1.append(divCol8);

var count=0;

function submitted(){
   event.preventDefault();
   count++;
if(count=='1'){
document.body.append(divRow2);
divRow2.append(divCol9);
divRow2.append(divCol10);
divRow2.append(divCol11);
divRow2.append(divCol12);
divRow2.append(divCol13);
divRow2.append(divCol14);
divRow2.append(divCol15);
divRow2.append(divCol16);
divCol9.innerText=ip1.value;
divCol10.innerText=ip2.value;
divCol11.innerText=ip3.value;
divCol12.innerText=ip4.value;
divCol13.innerText=ip5.value;
divCol14.innerText=ip6.value;
divCol15.innerText=ip7.value;
divCol16.innerText=ip8.value;
}
if(count==2){
   
}
}