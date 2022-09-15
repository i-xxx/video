var express = require('express')
var path = require('path');
var app = express()

app.use(express.static('video'))
app.use(express.static(path.join(__dirname, 'video')));
app.use('/video', express.static(path.resolve('video')))

app.listen(8001, () => {
  console.log('server started..');
})