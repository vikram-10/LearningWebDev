var bg=document.createElement('div');
bg.setAttribute('class','spacer');

var header=document.createElement('h2');
header.setAttribute('style','text-align:center');
header.innerText="Simple Calculator";

var innerDiv=document.createElement('div');
innerDiv.setAttribute('class','innerDiv');
//innerDiv.innerText="Input area"

var display=document.createElement('span');
display.setAttribute('class','display');
display.setAttribute('id','displayText');

var breaker=document.createElement('br');

var divRow1=document.createElement('div');
divRow1.setAttribute('class','row');
divRow1.setAttribute('id','marginer');

var divColumn1=document.createElement('div');
divColumn1.setAttribute('class','col-3 grey ');
divColumn1.setAttribute('id','paddinger');
divColumn1.innerText="%";


var divColumn2=document.createElement('div');
divColumn2.setAttribute('class','col-3 grey ');
divColumn1.setAttribute('id','paddinger');
divColumn2.innerText="CE";

var divColumn3=document.createElement('div');
divColumn3.setAttribute('class','col-3 grey ');
divColumn3.innerText="C";

var divColumn4=document.createElement('div');
divColumn4.setAttribute('class','col-3 grey ');
divColumn4.innerText="";


var divRow2=document.createElement('div');
divRow2.setAttribute('class','row');
divRow2.setAttribute('id','marginer');

var divColumn5=document.createElement('div');
divColumn5.setAttribute('class','col-3 grey');
divColumn5.innerText="1/x";

var divColumn6=document.createElement('div');
divColumn6.setAttribute('class','col-3 grey');
divColumn6.innerText="x^2";

var divColumn7=document.createElement('div');
divColumn7.setAttribute('class','col-3 grey');
divColumn7.innerText="root";

var divColumn8=document.createElement('div');
divColumn8.setAttribute('class','col-3 grey');
divColumn8.innerText="/";


var divRow3=document.createElement('div');
divRow3.setAttribute('class','row');
divRow3.setAttribute('id','marginer');

var divColumn9=document.createElement('div');
divColumn9.setAttribute('class','col-3 black');
divColumn9.innerText="7";

var divColumn10=document.createElement('div');
divColumn10.setAttribute('class','col-3 black');
divColumn10.innerText="8";

var divColumn11=document.createElement('div');
divColumn11.setAttribute('class','col-3 black');
divColumn11.innerText="9";

var divColumn12=document.createElement('div');
divColumn12.setAttribute('class','col-3 grey');
divColumn12.innerText="X";

var divRow4=document.createElement('div');
divRow4.setAttribute('class','row');
divRow4.setAttribute('id','marginer');

var divColumn13=document.createElement('div');
divColumn13.setAttribute('class','col-3 black');
divColumn13.innerText="4";

var divColumn14=document.createElement('div');
divColumn14.setAttribute('class','col-3 black');
divColumn14.innerText="5";

var divColumn15=document.createElement('div');
divColumn15.setAttribute('class','col-3 black');
divColumn15.innerText="6";

var divColumn16=document.createElement('div');
divColumn16.setAttribute('class','col-3 grey');
divColumn16.innerText="-";

var divRow5=document.createElement('div');
divRow5.setAttribute('class','row');
divRow5.setAttribute('id','marginer');

var divColumn17=document.createElement('div');
divColumn17.setAttribute('class','col-3 black');
divColumn17.innerText="1";

var divColumn18=document.createElement('div');
divColumn18.setAttribute('class','col-3 black');
divColumn18.innerText="2";

var divColumn19=document.createElement('div');
divColumn19.setAttribute('class','col-3 black');
divColumn19.innerText="3";

var divColumn20=document.createElement('div');
divColumn20.setAttribute('class','col-3 grey');
divColumn20.innerText="+";

var divRow6=document.createElement('div');
divRow6.setAttribute('class','row');
divRow6.setAttribute('id','marginer');

var divColumn21=document.createElement('div');
divColumn21.setAttribute('class','col-3 black');
divColumn21.innerText="+/-";

var divColumn22=document.createElement('div');
divColumn22.setAttribute('class','col-3 black');
divColumn22.innerText="0";

var divColumn23=document.createElement('div');
divColumn23.setAttribute('class','col-3 black');
divColumn23.innerText=".";

var divColumn24=document.createElement('div');
divColumn24.setAttribute('class','col-3 red');
divColumn24.innerText="=";

document.body.append(bg);
bg.append(header);
bg.append(innerDiv);
innerDiv.append(display);
innerDiv.append(breaker);
innerDiv.append(breaker);
innerDiv.append(divRow1);
divRow1.append(divColumn1);
divRow1.append(divColumn2);
divRow1.append(divColumn3);
divRow1.append(divColumn4);
innerDiv.append(divRow2);
divRow2.append(divColumn5);
divRow2.append(divColumn6);
divRow2.append(divColumn7);
divRow2.append(divColumn8);
innerDiv.append(divRow3);
divRow3.append(divColumn9);
divRow3.append(divColumn10);
divRow3.append(divColumn11);
divRow3.append(divColumn12);
innerDiv.append(divRow4);
divRow4.append(divColumn13);
divRow4.append(divColumn14);
divRow4.append(divColumn15);
divRow4.append(divColumn16);
innerDiv.append(divRow5);
divRow5.append(divColumn17);
divRow5.append(divColumn18);
divRow5.append(divColumn19);
divRow5.append(divColumn20);
innerDiv.append(divRow6);
divRow6.append(divColumn21);
divRow6.append(divColumn22);
divRow6.append(divColumn23);
divRow6.append(divColumn24);

var flag=0;

document.getElementById("displayText").value="";

divColumn1.addEventListener("click",function(){
   document.getElementById("displayText").innerText+=divColumn1.innerText;
});

divColumn2.addEventListener("click",function(){
   document.getElementById("displayText").innerText="";
});

divColumn3.addEventListener("click",function(){
   document.getElementById("displayText").innerText="";
});

divColumn4.addEventListener("click",function(){
   document.getElementById("displayText").innerText+=divColumn4.innerText;
});

divColumn5.addEventListener("click",function(){
   document.getElementById("displayText").innerText+=divColumn5.innerText;
});

divColumn6.addEventListener("click",function(){
   document.getElementById("displayText").innerText+=divColumn6.innerText;
});

divColumn7.addEventListener("click",function(){
   document.getElementById("displayText").innerText+=divColumn7.innerText;
});

divColumn8.addEventListener("click",function(){
   document.getElementById("displayText").innerText+=divColumn8.innerText;
});

divColumn9.addEventListener("click",function(){
   document.getElementById("displayText").innerText+=divColumn9.innerText;
});

divColumn10.addEventListener("click",function(){
   document.getElementById("displayText").innerText+=divColumn10.innerText;
});

divColumn11.addEventListener("click",function(){
   document.getElementById("displayText").innerText+=divColumn11.innerText;
});

divColumn12.addEventListener("click",function(){
   document.getElementById("displayText").innerText+=divColumn12.innerText;
});

divColumn13.addEventListener("click",function(){
   document.getElementById("displayText").innerText+=divColumn13.innerText;
});

divColumn14.addEventListener("click",function(){
   document.getElementById("displayText").innerText+=divColumn14.innerText;
});

divColumn15.addEventListener("click",function(){
   document.getElementById("displayText").innerText+=divColumn15.innerText;
});

divColumn16.addEventListener("click",function(){
   document.getElementById("displayText").innerText+=divColumn16.innerText;
});

divColumn17.addEventListener("click",function(){
   document.getElementById("displayText").innerText+=divColumn17.innerText;
});

divColumn18.addEventListener("click",function(){
   document.getElementById("displayText").innerText+=divColumn18.innerText;
});

divColumn19.addEventListener("click",function(){
   document.getElementById("displayText").innerText+=divColumn19.innerText;
});

divColumn20.addEventListener("click",function(){
   document.getElementById("displayText").innerText+=divColumn20.innerText;
});

divColumn21.addEventListener("click",function(){
   document.getElementById("displayText").innerText+=divColumn21.innerText;
});

divColumn22.addEventListener("click",function(){
   document.getElementById("displayText").innerText+=divColumn22.innerText;
});

divColumn23.addEventListener("click",function(){
   document.getElementById("displayText").innerText+=divColumn23.innerText;
});

divColumn24.addEventListener("click",function(){
    computation();
});

window.addEventListener("keypress",function(){
   var ip=String.fromCharCode(event.keyCode);
   if(((ip>=0)&&(ip<=9))||(ip=='+')||(ip=='-')||(ip=='X')||(ip=='/')||(ip=='%')){
      document.getElementById("displayText").innerText+=ip;
   }
   else if(ip=='='){
      computation();
   }
});

function computation(){
   var inputted=(document.getElementById("displayText").innerText);
   var val=inputted.split("");
   for(var i=0;i<val.length;i++){
      if(val[i]=='+'||val[i]=='-'||val[i]=='X'||val[i]=='/'||val[i]=='%'){
         var operator=val[i];
         var numbers=inputted.split(operator);
         switch(operator){
            case '+': var sum=(+numbers[0])+(+numbers[1]);
                      document.getElementById("displayText").innerText=sum;
                      break;
            case '-': var diff=(+numbers[0])-(+numbers[1]);
                      document.getElementById("displayText").innerText=diff;
                      break;
            case 'X': var prod=(+numbers[0])*(+numbers[1]);
                      document.getElementById("displayText").innerText=prod;
                      break;
            case '/': var quotient=(+numbers[0])/(+numbers[1]);
                      document.getElementById("displayText").innerText=quotient;
                      break;
            case '%': var mod=(+numbers[0])%(+numbers[1]);    
                      document.getElementById("displayText").innerText=mod;
                      break;                             
         }
      }
   }
}