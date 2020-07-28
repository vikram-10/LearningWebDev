// Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest()

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'http://api.domainsdb.info/v1/domains/search?domain=facebook&zone=com', true);
request.onload = function() {
    // Begin accessing JSON data here
  var data = JSON.parse(this.response)
  console.log(data)
  }
  
  // Send request
  request.send()