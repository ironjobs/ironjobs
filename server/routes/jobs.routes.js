const jobRouter = require('express').Router();

let allJobs = [];

jobRouter.get('/', function showAllJobs(req, res, next) {
  allJobs.map(function output(allJobs){
    return {
      id: req.body.id,
      company: req.body.company,
      link: req.body.link
    };
  });
  res.json(allJobs);

});

function addAJob(req, res, next) {
  console.log('Incoming data for POST', req.body);

  let job = {
    id:'364',
    company:req.body.company,
    link:req.body.link,
    notes:req.body.notes,
    createTime:Date.now()
  };

  allJobs.push(job);
  res.json({ message:' New job added!', theJobAdded: job});

}
jobRouter.post('/', addAJob);

 module.exports = jobRouter;
