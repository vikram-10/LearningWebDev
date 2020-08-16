var wrapper=document.createElement('div');
wrapper.setAttribute('class','wrapping');

var header=document.createElement('h1');
header.setAttribute('class','heading');
header.innerText="Number Game";

var container=document.createElement('div');
container.setAttribute('class','contain');



document.body.append(wrapper);
wrapper.append(header);
wrapper.append(container);


var blankPosition;
var numBoxes=9;
randomer();
var blank;
function randomer(numBoxes){
    var a=[];
    var flag=0;
    a[0]=Math.floor(Math.random()*8)+1
    for(var i=0;a.length<9;i++){
        var ip=Math.floor(Math.random()*9)+1;
        for(var j=0;j<a.length;j++){
            if(a[j]==ip){
                flag=1;
            }
        }
        if(flag==0){
            a.push(ip);
        }
        else{
            flag=0;
            continue;
        }
        flag=0;
    }
console.log(a);
var counter=0;
for(var k=0;k<a.length;k++){
  if(counter%3==0){
      var breaker=document.createElement('br');
      container.append(breaker);
  }  
  var box=document.createElement('img');
  box.setAttribute('src',`../assets/b${a[k]}.gif`);
  box.setAttribute('id',`img${a[k]}`);
  container.append(box);
  counter++;
}
}
var images=document.getElementsByClassName('contain');
var imgPositions=(images[0].getElementsByTagName('img'));
blankPosition=gettingBlankPosition(imgPositions);

if(blankPosition==0){
    imgPositions[blankPosition+1].addEventListener("click",function(){
        blankPosition=switchBoxes(blankPosition,1);
    });
    imgPositions[blankPosition+3].addEventListener("click",function(){
        blankPosition=switchBoxes(blankPosition,3);
    });
}
else if(blankPosition==1){
    imgPositions[blankPosition+1].addEventListener("click",function(){
        blankPosition=switchBoxes(blankPosition,1);
    });
    imgPositions[blankPosition+3].addEventListener("click",function(){
        blankPosition=switchBoxes(blankPosition,3);
    });
    imgPositions[blankPosition-1].addEventListener("click",function(){
        blankPosition=switchBoxes(blankPosition,-1);
    })
}
else if(blankPosition==2){
    imgPositions[blankPosition-1].addEventListener("click",function(){
        blankPosition=switchBoxes(blankPosition,-1);
    });
    imgPositions[blankPosition+3].addEventListener("click",function(){
        blankPosition=switchBoxes(blankPosition,3);
    });
}
else if(blankPosition==3){
    imgPositions[blankPosition+1].addEventListener("click",function(){
        blankPosition=switchBoxes(blankPosition,1);
    });
    imgPositions[blankPosition-3].addEventListener("click",function(){
        blankPosition=switchBoxes(blankPosition,-3); 
    });
    imgPositions[blankPosition+3].addEventListener("click",function(){
        blankPosition=switchBoxes(blankPosition,3);
    });
}
else if(blankPosition==4){
    imgPositions[blankPosition+1].addEventListener("click",function(){
        blankPosition=switchBoxes(blankPosition,1);
    });
    imgPositions[blankPosition-1].addEventListener("click",function(){
        blankPosition=switchBoxes(blankPosition,-1);
    });
    imgPositions[blankPosition+3].addEventListener("click",function(){
        blankPosition=switchBoxes(blankPosition,3);
    });
    imgPositions[blankPosition-3].addEventListener("click",function(){
        blankPosition=switchBoxes(blankPosition,-3);
    });
}
else if(blankPosition==5){
    imgPositions[blankPosition-1].addEventListener("click",function(){
        blankPosition=switchBoxes(blankPosition,-1);
    });
    imgPositions[blankPosition-3].addEventListener("click",function(){
        blankPosition=switchBoxes(blankPosition,-3);
    });
    imgPositions[blankPosition+3].addEventListener("click",function(){
        blankPosition=switchBoxes(blankPosition,3);
    });
}
else if(blankPosition==6){
    imgPositions[blankPosition+1].addEventListener("click",function(){
        blankPosition=switchBoxes(blankPosition,1);
    });
    imgPositions[blankPosition-3].addEventListener("click",function(){
        blankPosition=switchBoxes(blankPosition,-3);
    });
}
else if(blankPosition==7){
    imgPositions[blankPosition+1].addEventListener("click",function(){
        blankPosition=switchBoxes(blankPosition,1);
    });
    imgPositions[blankPosition-3].addEventListener("click",function(){
        blankPosition=switchBoxes(blankPosition,-3);
    });
    imgPositions[blankPosition-1].addEventListener("click",function(){
        blankPosition=switchBoxes(blankPosition,-1);
    });
}
else if(blankPosition==8){
    imgPositions[blankPosition-3].addEventListener("click",function(){
        blankPosition=switchBoxes(blankPosition,-3);
    });
    imgPositions[blankPosition-1].addEventListener("click",function(){
        blankPosition=switchBoxes(blankPosition,-1);
    });
}






function switchBoxes(blankPosition,num){
    let temp=imgPositions[blankPosition].src;
    imgPositions[blankPosition].src=imgPositions[blankPosition+num].src;
    imgPositions[blankPosition+num].src=temp;
    console.log(blankPosition+num);
    return blankPosition+num;
}


function gettingBlankPosition(imgPositions){
for(var k=0;k<imgPositions.length;k++){
    if(imgPositions[k].id=="img9"){
        return k;
    }
}
}
