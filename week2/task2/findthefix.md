<h1>Types of errors and fixes</h1>
<ul>
<li>Uncaught Type Error:Cannot Read Property: JavaScript TypeError is thrown when an operand or argument passed to a function is incompatible with the type expected by that operator or function.</li>
<li>TypeError:Undefined is not an object: Occurs if there is an undefined nested object</li>
<li>TypeError:null is not an object : Any JS code which executes and deals with DOM elements should execute <b>after the DOM elements have been created.</b> JS code is interpreted from top to down as layed out in the HTML. So, if there is a tag before the DOM elements, the JS code within script tag will execute as the browser parses the HTML page.
So,  you can put your DOM interacting code inside a function so that only function is defined but not executed</li>
<li>(unknown):Script error :This happens when your JS code is hosted on a different domain (i.e. a CDN). To fix, set Access-Control-Allow-Origin: * on the JS file, and crossorigin="anonymous" on the script tag.</li>
<li>TypeError:Object dosent support property</li>
<li>TypeError:'undefined' is not a function :Occurs when you call a function before it is defined</li>
<li>Uncaught Range Error: Maximum call stack :It means that somewhere in your code, you are calling a function which in turn calls another function and so forth, until you hit the call stack limit. This is almost always because of a recursive function with a base case that isn't being met</li>
<li>TypeError: cannot read property 'length' :This error indicates that our code expects to have an object with a length property, but that object was not present. length is commonly used on string and array, but a custom object could also have this property.</li>
<li>Uncaught TypeError: Cannot set property:In JavaScript if a variable has been declared, but has not been assigned a value, is automatically assigned the value undefined . Therefore, if you try to access the value of such variable, it will throw Uncaught TypeError cannot set property of undefined .</li>
<li>ReferenceError: event is not defined: ReferenceError: event is not defined. This error is thrown when you try to access a variable that is undefined or is outside the current scope.</li>
</ul>