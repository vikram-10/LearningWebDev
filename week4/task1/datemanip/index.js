var header=document.createElement('h1');
header.setAttribute('class','header');
header.innerText="Time Finder"

var inner=document.createElement('div');
inner.setAttribute('class','content');

var form=document.createElement('form');

var ipLabel=document.createElement('label');
ipLabel.setAttribute('for','dob');
ipLabel.innerText="Enter DOB:";

var ele=document.createElement('input');
ele.setAttribute('type','date');
ele.setAttribute('required','true');
ele.setAttribute("name","dob");

var submitButton=document.createElement('button');
submitButton.setAttribute('type','submit');
submitButton.innerText="Submit";

document.body.append(header);
document.body.append(inner);
inner.append(form);
form.append(ipLabel);
form.append(ele);
form.append(submitButton);


submitButton.addEventListener('click',function(){
    console.log("Submitted!");
})