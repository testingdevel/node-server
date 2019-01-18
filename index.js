// 'use strict';
//
// var fs = require('fs');
// var path = require('path');
//
// exports.get = function(event, context, callback) {
//   var contents = fs.readFileSync(`public${path.sep}index.html`);
//   var result = {
//     statusCode: 200,
//     body: contents.toString(),
//     headers: {'content-type': 'text/html'}
//   };
//
//   callback(null, result);
// };


const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World from Express!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
