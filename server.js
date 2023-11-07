const http = require('node:http');
const server = http.createServer((req, res) => {
    let url = req.url.split('/');
    if (url[1] === '') {
        res.statusCode = 200;
        res.end("Hello Galvanize");
    }})
server.listen(3000, 'localhost', () => {
    console.log('Server is running on localhost:3000')
})