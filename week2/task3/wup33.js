
function sumCSV(s)
{
  var sum=0;
  var splitted=s.split(",").map(val=>+val);
  for(var i=0;i<splitted.length;i++){
      sum+=splitted[i];
  }
  console.log(sum);
}
sumCSV("1.5, 2.3, 3.1, 4, 5.5, 6, 7, 8, 9, 10.9")