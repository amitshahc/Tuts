/*
# LEARN YOU THE NODE.JS FOR MUCH WIN!

## FILTERED LS (Exercise 5 of 13)

 Create a program that prints a list of files in a given directory,
 filtered by the extension of the files. You will be provided a directory
 name as the first argument to your program (e.g. '/path/to/dir/') and a
 file extension to filter by as the second argument.

 For example, if you get 'txt' as the second argument then you will need to
 filter the list to only files that end with .txt. Note that the second
 argument will not come prefixed with a '.'.

 Keep in mind that the first arguments of your program are not the first
 values of the process.argv array, as the first two values are reserved for
 system info by Node.

 The list of files should be printed to the console, one file per line. You
 must use asynchronous I/O.

─────────────────────────────────────────────────────────────────────────────

## HINTS

 The fs.readdir() method takes a pathname as its first argument and a
 callback as its second. The callback signature is:

    function callback (err, list) { /* ... * / }

 where list is an array of filename strings.

 Documentation on the fs module can be found by pointing your browser here:
 file://C:\Users\Amit.Shah\AppData\Roaming\npm\node_modules\learnyounode\no
 de_apidoc\fs.html

 You may also find node's path module helpful, particularly the extname
 method.

 Documentation on the path module can be found by pointing your browser
 here:
 file://C:\Users\Amit.Shah\AppData\Roaming\npm\node_modules\learnyounode\no
 de_apidoc\path.html

─────────────────────────────────────────────────────────────────────────────

  » To print these instructions again, run: learnyounode print
  » To execute your program in a test environment, run: learnyounode run

    program.js
  » To verify your program, run: learnyounode verify program.js
  » For help run: learnyounode help


 Here's the official solution in case you want to compare notes:

─────────────────────────────────────────────────────────────────────────────

    var fs = require('fs')
    var path = require('path')

    var folder = process.argv[2]
    var ext = '.' + process.argv[3]

    fs.readdir(folder, function (err, files) {
      if (err) return console.error(err)
      files.forEach(function (file) {
        if (path.extname(file) === ext) {
          console.log(file)
        }
      })
    })

─────────────────────────────────────────────────────────────────────────────

*/


var fs = require('fs');
var path = require('path');
var dirPath = process.argv[2] || null;
var ext = process.argv[3] || null;

try {
    if (dirPath) {
        /*if (!fs.existsSync(dirPath)) {
            throw new Error(dirPath + " does not exists");
        }*/
        
        fs.stat(dirPath, validateDir.bind({path:dirPath}));
        
    } else {
        throw ("No file input found");
    }
} catch (err) {
    console.error("Error Main: ", err.message);
}

function validateDir(err, objStats) {
    try {
        if (err) throw err;

        if (!objStats.isDirectory()) {
            throw new Error(this.path + " is not a directory");
        }

        fs.readdir(dirPath, listFiles);

    } catch (err) {
        console.error("Error validateDir	: ", err.message);
    }
}

function listFiles(err, arrList) {
    try {
        if (err) {
            throw (err);
        }

        //console.log(arrList);
        for(i in arrList){        	
        	var fname = arrList[i];
        	var fext = path.extname(fname);

        	if(ext && fext == '.'+ext){
        		console.log(fname);
        	}
        	/*else{
        		console.log(fname);
        	}*/
        }

    } catch (e) {
        console.error("Error: ", e.message, "\n\n");
    }
}