const router = require('express').Router();
const utilities = require('../utilities/jobsValidation');

const jobsController = require('../controllers/jobs');

/***************
 *Jobs Collection 
 ***************/

router.get('/', jobsController.getAllJobs);

router.get('/:id', jobsController.getSingleJob);

router.post('/', 
    utilities.jobRules(),
    utilities.checkJobsErrors,
    jobsController.createJob);

router.put('/:id', 
    utilities.jobRules(),
    utilities.checkJobsErrors,
    jobsController.updateJob);

router.delete('/:id', jobsController.deleteJob);

module.exports = router;