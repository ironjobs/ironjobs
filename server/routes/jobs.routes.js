const jobRouter = require('express').Router();

let allJobs = ['Job1', 'Job2', 'Job3'];

jobRouter.get('/', function showAllJobs(req, res, next) {

  res.json(allJobs);
});

function addAJob(req, res, next) {
  console.log('Incoming data for POST', req.body);

  allJobs.push(req.body.job);
  res.json({ message:' New job added!', theJobAdded: req.body});

}
jobRouter.post('/', addAJob);

 module.exports = jobRouter;
