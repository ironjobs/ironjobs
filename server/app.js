
const express = require('express');
const bodyParser = require('body-parser');

let app = express();

app.use(bodyParser.json());
// app.use(require(''));
// app.use(require(''));

app.get('/', function showJobs(request, response, next) {
  response.status(200);
  response.setHeader('Content-Type', 'text/html');

  response.end('<h1>Iron Jobs</h1>');
});

app.use('/api/jobs', require('./routes/jobs.routes.js'));

app.use(require('./middleware/error-handler.middleware.js'));

app.listen(3000, function doSomethingOnceServerIsUp() {
  console.log('The server is now up!');
});
