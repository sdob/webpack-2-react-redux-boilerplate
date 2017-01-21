const path = require('path');
const express = require('express');
const port = process.env.PORT || 8080;

const app = express();
app.use(express.static(__dirname + '/dist'));
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});
app.listen(port, function(err) {
  if (err) {
    console.log(err);
  }
});
