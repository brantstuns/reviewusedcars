'use strict';

const chalk = require('chalk');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('/', function (req, res) {
  res.sendFile('index.html')
});

app.listen(port, function () {
  console.log(`\n${'~'.repeat(30)}\n${chalk.blue.underline.bold('Server started on port:' + port)}\n${'~'.repeat(30)}\n`);
});