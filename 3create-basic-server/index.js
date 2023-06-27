// const http = require('http');


// http.createServer((req,resp) =>
// {
// resp.write("<h1>innovators home</h1>");
// resp.end();
// }).listen(4501);

// import http from 'http';

// http.createServer((req, res) => {
//   // Handle incoming requests here
//   res.write("<h1>innovators home</h1>");
//   res.end();
// }).listen(3000, () => {
//   console.log('Server is running on port 3000');
// });

const http = require('http');

function datacontrol(req,resp)
{
resp.write("<h1>innovators home</h1>");
resp.end();
}
http.createServer(datacontrol).listen(4501);


//understading arrow function
// function test(a)
// {
//     return a*10;
// }
// const test =(a)=>a*100

// test(5)
