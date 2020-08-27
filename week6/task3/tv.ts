document.getElementById('upButton').addEventListener('click', function () {
    var videoDiv=document.createElement('div');
    videoDiv.setAttribute('style','display:inline')
    videoDiv.innerHTML=`<iframe width="560" height="315" src="https://www.youtube.com/embed/HfTXHrWMGVY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
    document.body.append(videoDiv);
});
