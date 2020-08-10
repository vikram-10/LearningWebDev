var header=document.createElement('h1');
header.setAttribute('class','header');
header.innerText="Time Finder"

var content=document.createElement('div');
content.setAttribute('class','content');
content.innerText="PLEASE ENTER DOB:";

var dd=document.createElement('select');
dd.setAttribute('id','date');

var op1=document.createElement('option');
op1.setAttribute('value','1');
op1.innerText="01"

var op2=document.createElement('option');
op2.setAttribute('value','1');
op2.innerText="02"

var op3=document.createElement('option');
op3.setAttribute('value','1');
op3.innerText="03"

var op4=document.createElement('option');
op4.setAttribute('value','1');
op4.innerText="04"

var op5=document.createElement('option');
op5.setAttribute('value','1');
op5.innerText="05"

var op6=document.createElement('option');
op6.setAttribute('value','1');
op6.innerText="06"

var op7=document.createElement('option');
op7.setAttribute('value','1');
op7.innerText="07"

var op8=document.createElement('option');
op8.setAttribute('value','1');
op8.innerText="08"

var op9=document.createElement('option');
op9.setAttribute('value','1');
op9.innerText="09"

var op10=document.createElement('option');
op10.setAttribute('value','1');
op10.innerText="10"

var breaker=document.createElement('br');

document.body.append(header);
document.body.append(content);
content.append(dd);
content.append(breaker);
content.append(breaker);
dd.append(op1);
dd.append(op2);
dd.append(op3);
dd.append(op4);
dd.append(op5);
dd.append(op6);
dd.append(op7);
dd.append(op8);
dd.append(op9);
dd.append(op10);