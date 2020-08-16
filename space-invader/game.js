
var hero={
    left: 575,
    top:700
}

var missiles = [];

var enemies = [
    { left: 200, top: 100 },
    { left: 300, top: 100 },
    { left: 400, top: 100 },
    { left: 500, top: 100 },
    { left: 600, top: 100 },
    { left: 700, top: 100 },
    { left: 800, top: 100 },
    { left: 900, top: 100 },
    { left: 200, top: 175 },
    { left: 300, top: 175 },
    { left: 400, top: 175 },
    { left: 500, top: 175 },
    { left: 600, top: 175 },
    { left: 700, top: 175 },
    { left: 800, top: 175 },
    { left: 900, top: 175 }
];
 
document.onkeydown=function(e){
    if(e.keyCode=='37'){
        hero.left=hero.left-10; 
    }
    if(e.keyCode=='39'){
        hero.left=hero.left+10;
    }
    if(e.keyCode=='32'){
        console.log("Space");
    }
    movement();
}

addEnemies();

function movement(){
    document.getElementById("hero").style.left=hero.left+'px';
}

function addEnemies(){
   document.getElementById('enemies').innerHTML='';
   for(var i=0;i<enemies.length;i++){
    document.getElementById('enemies').innerHTML=
   }
}