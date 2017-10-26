var http = require('http');
var port = 1337;

var server = http.createServer(function (req, res) {
  // req is an http.IncomingMessage, which is a Readable Stream
  // res is an http.ServerResponse, which is a Writable Stream

  var body = '';
  // we want to get the data as utf8 strings
  // If you don't set an encoding, then you'll get Buffer objects
  req.setEncoding('utf8');

  // Readable streams emit 'data' events once a listener is added
  req.on('data', function (chunk) {
    body += chunk;
  });

  // the end event tells you that you have entire body
  req.on('end', function () {
    try {
      var data = JSON.parse(body);
    } catch (er) {
      // uh oh!  bad json!
      res.statusCode = 400;
      return res.end('error: ' + er.message);
    }

    // write back something interesting to the user:
    res.write(typeof data);
    res.end();
  });
});

server.listen(port, function(){
  printInstructionsForCurlCommands();
});










// Print out what to try against the streaming server.
function printInstructionsForCurlCommands(){
	console.log("listening on localhost:" + port);
	console.log("\n----------------------------------------------");
	console.log("\nTry out the following curl commands to see");
	console.log("how the streaming server works.")
	console.log("$ curl localhost:1337 -d '{}'");
	console.log("$ curl localhost:1337 -d '\"foo\"'");
	console.log("$ curl localhost:1337 -d 'not json'");
}
