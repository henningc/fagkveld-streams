var fs = require('fs');
var upper = require('./upper');

fs.createReadStream('test.log')
.pipe(upper)
.pipe(fs.createWriteStream('newTest.log'));
