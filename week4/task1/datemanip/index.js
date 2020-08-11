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
ele.setAttribute('class','dateInput');
ele.setAttribute('id','dateip')

var submitButton=document.createElement('button');
submitButton.innerText="Submit";

document.body.append(header);
document.body.append(inner);
inner.append(form);
form.append(ipLabel);
form.append(ele);
form.append(submitButton);


submitButton.addEventListener('click',function(){
    var ip=document.getElementById('dateip').value;
    console.log(ip);
    let now = new Date();
 
    let day = ("0" + now.getDate()).slice(-2);
    let month = ("0" + (now.getMonth() + 1)).slice(-2);

    let today = (day)+"-"+(month)+"-"+ now.getFullYear();
    console.log(today);
})