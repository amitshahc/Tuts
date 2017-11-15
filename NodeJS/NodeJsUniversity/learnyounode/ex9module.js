const http = require('http');

module.exports.fetchUrl = function(url, index, callback) {
    try {
        if (url) {
            http.get(url, (res) => {
                try {
                    res.setEncoding('utf8');
                    let rawData = '';

                    res.on('data', (chunk) => {
                        rawData += chunk;
                    });

                    res.on('error', (err) => {
                        callback(err);
                    });

                    res.on('end', () => {
                        callback(null, index, rawData);
                    });
                } catch (e) {
                    callback(e, index);
                }
            });
        }
    } catch (e) {
        callback(e);
    }
}