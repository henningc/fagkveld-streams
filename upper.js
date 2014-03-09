var stream = require('stream')
var upper = new stream.Transform({ objectMode: true });

upper._transform = function(chunk, encoding, done) {
  var data = chunk.toString().toUpperCase();
  this.push(data, encoding);
  done();
}

module.exports = upper;
