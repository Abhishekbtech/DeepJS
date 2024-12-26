
// AJAX - Server Response


//      Property	        Description
//      responseText	    get the response data as a string
//      responseXML	        get the response data as XML data


// The responseText property returns the server response as a JavaScript string, and you can use it accordingly
function loadDoc() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function () {
        document.getElementById("demo").innerHTML = this.responseText;
    }
    xhttp.open("GET", "ajax_info.txt");
    xhttp.send();
}


// The responseXML property returns the server response as an XML DOM object Using this property you can parse the response as an XML DOM object
const xhttp = new XMLHttpRequest();
xhttp.onload = function () {
    const xmlDoc = this.responseXML;
    const x = xmlDoc.getElementsByTagName("ARTIST");
    let txt = "";
    for (let i = 0; i < x.length; i++) {
        txt = txt + x[i].childNodes[0].nodeValue + "<br>";
    }
    document.getElementById("demo").innerHTML = txt;
}
xhttp.open("GET", "cd_catalog.xml");
xhttp.send();


// Server Response Methods
//      Method	                        Description
//      getResponseHeader()	            Returns specific header information from the server resource
//      getAllResponseHeaders()	        Returns all the header information from the server resource


// The getAllResponseHeaders() method returns all header information from the server response
const xhttp = new XMLHttpRequest();
xhttp.onload = function () {
    document.getElementById("demo").innerHTML = this.getAllResponseHeaders();
}
xhttp.open("GET", "ajax_info.txt");
xhttp.send()


// The getResponseHeader() method returns specific header information from the server response
const xhttp = new XMLHttpRequest();
xhttp.onload = function () {
    document.getElementById("demo").innerHTML = this.getResponseHeader("Last-Modified");
}
xhttp.open("GET", "ajax_info.txt");
xhttp.send();