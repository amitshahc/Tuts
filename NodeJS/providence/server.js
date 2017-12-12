const http = require('http');
const app = require('./app');
const port = process.argv[2] || '8000';

const server = http.createServer(app.handleRequest);
    /*try {
        //console.log(req.method);

        let objUrl = url.parse(req.url, true);
        //console.log(req.body);

        let objQuery = objUrl.query;

        let body = '';


        
    } catch (err) {
        console.error("Error:", err.message);
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify({ "Error": err.message }));
    }*/

//});

server.listen(Number(port));