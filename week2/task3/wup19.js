function getDistance(x1, y1, x2, y2)
{
  var tot=Math.pow((x2-x1),2)+Math.pow((y2-y1),2)  
  return Math.pow(tot,0.5);
}

console.log(getDistance(100, 100, 400, 300));