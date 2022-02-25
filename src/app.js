const express = require('express');
const {chalk} = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');
const path = require('path');

const app = express();

app.use(morgan('tiny'));  //tiny, combined

app.use(express.static(path.join(__dirname, '/public/')));

app.get('/', (req, res) => {
  res.send('Hello from my app');
});

app.listen(3000, () => {
    debug(`listening on port 3000`);  //' + chalk.green('3000'));
    //console.log(`listening on port ${chalky.chgreen('3000')}`);
});