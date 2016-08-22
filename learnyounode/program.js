var mymodule = require('./mymodule');

mymodule(process.argv[2], process.argv[3], callback);

// note best practice to handle err in callback
function callback (err, data) {
  if (err) {
    return console.error(err);
  } else {
    // better with forEach
    data.forEach(function (file) {
      console.log(file);
    })
  }
}
