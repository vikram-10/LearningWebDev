var s = reverseString("JavaScript");
function reverseString(s)
{
    var charArr=s.split("");
    var rev=charArr.reverse();
    console.log(rev.join(""));
   // your code here  
}