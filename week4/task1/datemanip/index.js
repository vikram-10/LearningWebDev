var header=document.createElement('h1');
header.setAttribute('class','header');
header.innerText="Time Finder"

var inner=document.createElement('div');
inner.setAttribute('class','content');

var form=document.createElement('form');

var ipLabel=document.createElement('label');
ipLabel.setAttribute('for','dob');
ipLabel.innerText="Enter DOB:";

var breaker=document.createElement('br');

var ele=document.createElement('input');
ele.setAttribute('type','date');
ele.setAttribute('required','true');
ele.setAttribute("name","dob");
ele.setAttribute('class','dateInput');
ele.setAttribute('id','dateip')

var submitButton=document.createElement('button');
submitButton.innerText="Submit";

var op1=document.createElement('div');
op1.setAttribute('class','output');
op1.setAttribute('id','oped');
op1.innerText="Year Difference:";

var op2=document.createElement('div');
op2.setAttribute('class','output');
op2.innerText="Month Difference:";

var op3=document.createElement('div');
op3.setAttribute('class','output');
op3.innerText="Day Difference:";

document.body.append(header);
document.body.append(inner);
inner.append(form);
form.append(ipLabel);
form.append(breaker);
form.append(ele);
form.append(submitButton);


submitButton.addEventListener('click',function(){
    event.preventDefault();
    var date= ele.value;
    var splitDate=date.split("-");
    var ipYear=splitDate[0];
    var ipMonth=splitDate[1];
    var ipDay=splitDate[2];
    y=new Date();
    var day=y.getDate();
    var month=y.getMonth()+1;
    var year=y.getFullYear();
    var yearDifference=year-ipYear;
    var monthDifference=month-ipMonth;
    var dayDifference=day-ipDay;
    
    op1.innerText+=yearDifference;
    
    op2.innerText+=monthDifference;
    
    op3.innerText+=dayDifference;
    inner.append(op1);
    inner.append(op2);
    inner.append(op3);
});