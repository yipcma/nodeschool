var fs = require('fs');
// put second argument as 'utf8' to get a String instead of a Buffer

fs.readFile(process.argv[2], 'utf8', function readFileCallback (err, data) {
  if (err) {
    console.log(err);
  } else {
    var val = data.split('\n').length - 1;
    console.log(val);
  }
})
