var fs = require('fs');
var path = require('path');

var filePath = process.argv[2];
var fileExt = process.argv[3];

fs.readdir(filePath, function onReaddir (err, list) {
  if (err) {
    // error handling
    return console.error(err);
  } else {
    // another way is to print with an if-check
    var filteredList = list.filter(extFilter);
    for (var i = 0; i < filteredList.length; i++) {
      console.log(filteredList[i]);
    }
  }
})

function extFilter (file) {
  return path.extname(file) === '.' + fileExt;
}
