
// AJAX - The XMLHttpRequest Object


// The keystone of AJAX is the XMLHttpRequest object.

// Create an XMLHttpRequest object
variable = new XMLHttpRequest();

// Define a callback function
xhttp.onload = function () {
    // What to do when the response is ready
}

// Open the XMLHttpRequest object

// Send a Request to a server
// To send a request to a server, you can use the open() and send() methods of the XMLHttpRequest object:
xhttp.open("GET", "ajax_info.txt");
xhttp.send();



// XMLHttpRequest Object Methods

//      Method	                                    Description
//      new XMLHttpRequest()	                    Creates a new XMLHttpRequest object
//      abort()	                                    Cancels the current request
//      getAllResponseHeaders()	                    Returns header information
//      getResponseHeader()	                        Returns specific header information
//      open(method, url, async, user, psw)	        Specifies the request
//                                                  method: the request type GET or POST
//                                                  url: the file location
//                                                  async: true (asynchronous) or false (synchronous)
//                                                  user: optional user name
//                                                  psw: optional password
//      send()	                                    Sends the request to the server
//                                                  Used for GET requests
//      send(string)	                            Sends the request to the server.
//                                                  Used for POST requests
//      setRequestHeader()	                        Adds a label/value pair to the header to be sent



// XMLHttpRequest Object Properties

//      Property	                Description
//      onload	                    Defines a function to be called when the request is received (loaded)
//      onreadystatechange	        Defines a function to be called when the readyState property changes
//      readyState	                Holds the status of the XMLHttpRequest.
//                                  0: request not initialized
//                                  1: server connection established
//                                  2: request received
//                                  3: processing request
//                                  4: request finished and response is ready
//      responseText	            Returns the response data as a string
//      responseXML	                Returns the response data as XML data
//      status	                    Returns the status-number of a request
//                                  200: "OK"
//                                  403: "Forbidden"
//                                  404: "Not Found"
//      statusText	                Returns the status-text (e.g. "OK" or "Not Found")



// The onload Property

// With the XMLHttpRequest object you can define a callback function to be executed when the request receives an answer.
// The function is defined in the onload property of the XMLHttpRequest object
function loadDoc() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function () {
        document.getElementById("demo").innerHTML = this.responseText;
    }
    xhttp.open("GET", "ajax_info.txt");
    xhttp.send();
}

// Multiple Callback Functions
loadDoc("url-1", myFunction1);

loadDoc("url-2", myFunction2);

function loadDoc(url, cFunction) {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {cFunction(this);}
  xhttp.open("GET", url);
  xhttp.send();
}

function myFunction1(xhttp) {
  // action goes here
}
function myFunction2(xhttp) {
  // action goes here
}