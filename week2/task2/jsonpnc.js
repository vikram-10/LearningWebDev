var expected = {foo: 5, bar: 6};
var actual = {foo: 5, bar: 6}
function assertObjectsEqual(actual, expected, testName){
    var op;
    var flag=0;
 // your code here
 for(key in actual){
     if(actual[key]!=expected[key]){
    //FAILED [my test] Expected {“foo”:6,”bar”:5}, but got {“foo”:5,”bar”:6}
      flag=1;
     }
 }
 if(flag==1){
    console.log("FAILED "+testName+" Expected "+expected+" but got "+actual);
 }
 else{
    console.log("PASSED "+testName+" Expected "+JSON.stringify(expected)+" and got "+JSON.stringify(actual));
 }
}

assertObjectsEqual(actual,expected,"detect objects are equal");