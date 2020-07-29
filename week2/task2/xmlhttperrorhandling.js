// Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest()

// Open a new connection, using the GET request on the URL endpoint
try{
    request.open('GET', 'http://api.domainsdb.info/v1/domains/search?domain=facebook&zone=com', true);
}
catch{
    console.log("The Given API could not be opened!");
}
try {
    request.send(null); // Here a xmlhttprequestexception number 101 is thrown 
} catch(err) {
    document.getElementById("body").innerHTML += "\nXMLHttprequest error: " + err.description; // This prints "XMLHttprequest error: undefined" in the body.
}
request.onload = function() {
    // Begin accessing JSON data here
  var data = JSON.parse(this.response)
  console.log(data)
  }
  
  // Send request
  request.send()