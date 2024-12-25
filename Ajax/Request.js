
// AJAX - XMLHttpRequest

// The XMLHttpRequest object is used to request data from a server.

// Send a Request To a Server

// To send a request to a server, we use the open() and send() methods of the XMLHttpRequest object
xhttp.open("GET", "ajax_info.txt", true);
xhttp.send();


const xhr = new XMLHttpRequest();
xhr.open("GET", "https://api.example.com/data", true);

xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
        if (xhr.status === 200) {
            console.log("Response:", xhr.responseText);
        } else {
            console.error("Error:", xhr.statusText);
        }
    }
};

xhr.send();


//      Method	                        Description
//      open(method, url, async)	    Specifies the type of request
//                                      method: the type of request: GET or POST
//                                      url: the server (file) location
//                                      async: true (asynchronous) or false (synchronous)
//      send()	                        Sends the request to the server (used for GET)
//      send(string)	                Sends the request to the server (used for POST)



// post

const xhr = new XMLHttpRequest();
xhr.open("POST", "https://api.example.com/data", true);
xhr.setRequestHeader("Content-Type", "application/json");

const data = JSON.stringify({ name: "John", age: 30 });

xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
        if (xhr.status === 200) {
            console.log("Response:", xhr.responseText);
        } else {
            console.error("Error:", xhr.statusText);
        }
    }
};

xhr.send(data);