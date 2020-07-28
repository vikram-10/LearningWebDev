What do users see when theres a JS error on the webpage? <b>-->Nothing</b>
<ul>
<li>Rule #1:</li>

<b>Assume your code will fail</b>
It involves assuming different types of inputs mainly
<li>Rule #2:</li>
<b>Log errors to the server</b>
If any errors are found, the author suggests logging the errors into the server.
<li>Rule #3:</li>
<b>You are not the browser,handle errors</b>
Using the try catch block to contain the errors that are obtained.
Caught errors are considered to be handled.
When a JavaScript runtime error (including syntax errors and exceptions thrown within handlers) occurs, an error event using interface ErrorEvent is fired at window and window.onerror() is invoked (as well as handlers attached by window.addEventListener (not only capturing)).
Error-->try-catch-->window.oneerror-->Browser Error
<li>Rule #4</li>
<b>Identify where errors might occur</b>
<ul>
Types of errors:
<li>Type coertion errors</li>
<li>Datatype Errors</li>
<li>Communication Errors</li>
</ul>
Datatype errors often occur with function arguments
Basically, insufficient value checks
Communication errors basically are:
<ul>
<li>Invlaid URL/post data</li>
<i>Typically long string concats,Make sure parameters are named correctly</i>
<li>Server response status</li>
<i>200 is not the only status to be returned, beware of 304</i>
<li>No network</li>
<li>Server response content</li>
<i>If possible,set status to 500</i>
</ul>
<li>Rule#5</li>
<b>Throw your own errors</b>
Throw should be used in the low level parts(utilities,core libraries) of the applications whereas, try-catch should be used in the high level parts.(application-specific,client side business logic)

<li>Rule #6</li>
<b>Distinguish fatal vs Non-Fatal</b>
Non-Fatal=>Won't interfere with main tasks
Affects only a portion of the page
Recovery is possible 
Don't tell user it isn't working unless absolutely necessary
Fatal=>the appl cannot continue
it interferes with user productivity
Message the user immediately
Reload

<li>Rule #7</li>
<b>Provide a debug mode</b>
assign a global variable
try,catch should rethrow errors. window.onerror must be false
allow browser to handle error

</ul>


