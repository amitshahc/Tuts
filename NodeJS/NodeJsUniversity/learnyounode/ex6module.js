var fs = require('fs');
var path = require('path');

module.exports = function(dirPath, ext, callback) {
    
    ext = '.' + ext;
    
    var validateDir = function(err, objStats) {
        try {
            //console.log("objStats", err, objStats);
            if (err) throw err;

            if (!objStats.isDirectory()) {
                throw new Error(dirPath + " is not a directory");
            }


            fs.readdir(dirPath, listFiles);


        } catch (err) {
            callback(err);
        }
    }

    var listFiles = function(err, arrList) {
        try {
            if (err) throw (err); //{ callback(err); return; } 

            //console.log(arrList);

            var fList = [];
            for (i in arrList) {
                var fname = arrList[i];
                var fext = path.extname(fname);

                if (ext && fext == ext) {
                    fList.push(fname);
                }
            }

            callback(null, fList);

        } catch (err) {
            callback(err);
        }
    }


    try {
        if (dirPath) {
            //fs.stat(dirPath, validateDir.bind({ path: dirPath }));
            //fs.stat(dirPath, validateDir);
            fs.readdir(dirPath, listFiles);
        } else {
            throw new Error("No file input found");
        }
    } catch (err) {
        callback(err);
    }
}