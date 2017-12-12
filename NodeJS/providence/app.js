const url = require('url');
const path = require('path');
const db = require('./db');
const resHeaders = { 'Content-Type': 'text/plain; charset=UTF-8' };

module.exports = {
    handleRequest: function(req, res) {
        try {
            let body = '';
            let objUrl = url.parse(req.url, true);
            let pathname = objUrl.pathname;

            req.on('error', (err) => {
                throw err;
            });

            req.on('data', (data) => {
                body += data;
            });

            req.on('end', () => {
                body = body.toString();
                sendResponse(req, res, body);
            });

            sendResponse = function(req, res, data) {
                try {
                    if (req.method == "GET") {
                        if (/^\/api\//.test(pathname)) {
                            res.writeHead(200, resHeaders);
                            res.write("GET");
                            res.end();
                        } else {
                            res.writeHead(404, resHeaders);
                            res.end();
                        }
                    } else if (req.method == "POST") {
                        if (/^\/api\//.test(pathname)) {
                            res.writeHead(200, resHeaders);
                            console.log(body);
                            objData = JSON.parse(body);
                            res.write(JSON.stringify(objData));
                            db.insert("hello");
                            res.end();
                        } else {
                            res.writeHead(404, resHeaders);
                            res.end();
                        }
                    } else {
                        throw new Error("Only GET/POST methods supported!");
                    }
                } catch (err) {
                    res.end(err.message);
                }
            };

        } catch (err) {
            res.end(err.message);
        }


    }
}