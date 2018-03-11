const express = require('express');
const app = express();

console.log('Starting server')

app.listen(3000, function() {
  console.log('listening on 3000')
})
