const httpInstance = require("http");
const portNumber = 3000


const server = httpInstance.createServer((req, res) => {
    if (req.method === 'GET' && req.url === '/') {
        res.write('Hola desde el backend');
        res.statusCode = 200;
        res.end();

    } else if (req.method === 'POST' && req.url === '/archivo') {
        let totalbytes = 0
        req.on('data', (data) => {
            totalbytes += data.length;

        })
        req.on('end', () => {
            res.write(`Recibimos ${totalbytes} bytes en el payload`);
            res.statusCode = 200;
            res.end();
        })

    } else {
        res.statusCode = 404;
        res.end();
    }
})

server.listen(portNumber, () => {
    console.log(`Server running on port ${portNumber}`);
})



