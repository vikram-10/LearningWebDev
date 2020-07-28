// Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest()

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'https://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=051d5192a8cb45b36db28f89b6cb01b4', true);
request.onload = function() {
    // Begin accessing JSON data here
  var data = JSON.parse(this.response)
  console.log(data)
  }
  
  // Send request
  request.send()