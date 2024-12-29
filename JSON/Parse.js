
// JSON.parse()

// A common use of JSON is to exchange data to/from a web server.
// When receiving data from a web server, the data is always a string.
// Parse the data with JSON.parse(), and the data becomes a JavaScript object.

const st = '{"name":"John", "age":30, "city":"New York"}'
const obj = JSON.parse(st);