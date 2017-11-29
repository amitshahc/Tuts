/*
 # LEARN YOU THE NODE.JS FOR MUCH WIN!

 ## MY FIRST I/O! (Exercise 3 of 13)

  Write a program that uses a single synchronous filesystem operation to
  read a file and print the number of newlines (\n) it contains to the
  console (stdout), similar to running cat file | wc -l.

  The full path to the file to read will be provided as the first
  command-line argument (i.e., process.argv[2]). You do not need to make
  your own test file.


Here's the official solution in case you want to compare notes:

─────────────────────────────────────────────────────────────────────────────

    var fs = require('fs')

    var contents = fs.readFileSync(process.argv[2])
    var lines = contents.toString().split('\n').length - 1
    console.log(lines)

    // note you can avoid the .toString() by passing 'utf8' as the
    // second argument to readFileSync, then you'll get a String!
    //
    // fs.readFileSync(process.argv[2], 'utf8').split('\n').length - 1

─────────────────────────────────────────────────────────────────────────────

*/

var fs = require('fs');
var file = process.argv[2] || null;

if (file) {
    /*var fc = fs.readFile(file, { encoding: 'utf-8' }, (err, fc) => {
        try {
            if (err) {
                throw (err);                
            }
            console.log(fc);
        } catch (e) {            
            console.error("Error: ", e.message, "\n\n");
        }
    });
    */
    var fbuffer = fs.readFileSync(file);

    //console.log(fbuffer.toString());

    var fc = fbuffer.toString();
    var arrFc = fc.split("\n");
    console.log(arrFc.length - 1);
    
} else {
    console.error("Error:", "No file input found");
}