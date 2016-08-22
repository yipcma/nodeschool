module.exports = function (folder, ext, callback) {
  var fs = require('fs');
  var path = require('path');

  fs.readdir(folder, function (err, data) {
    if (err)
      return callback(err);
    var filteredData = data.filter(function (val) {
      return path.extname(val) === '.' + ext;
    });
    callback(null, filteredData);
  })
}
