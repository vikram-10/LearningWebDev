var hero={
    left: 575,
    top:700
}
document.onkeydown=function(e){
    if(e.keyCode=='37'){
        var l=hero.left-10;
        document.getElementById('hero').style.left = l + 'px'; 
    }
    if(e.keyCode=='39'){
    }
}

