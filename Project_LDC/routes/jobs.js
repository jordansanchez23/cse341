const router = require('express').Router();
const utilities = require('../utilities/jobsValidation');

const jobsController = require('../controllers/jobs');

const { isAuthenticated } = require('../middleware/authenticate');

/***************
 *Jobs Collection 
 ***************/

router.get('/', jobsController.getAllJobs);

router.get('/:id', jobsController.getSingleJob);

router.post('/', 
    isAuthenticated,
    utilities.jobRules(),
    utilities.checkJobsErrors,
    jobsController.createJob);

router.put('/:id', 
    isAuthenticated,
    utilities.jobRules(),
    utilities.checkJobsErrors,
    jobsController.updateJob);

router.delete('/:id', isAuthenticated, jobsController.deleteJob);

module.exports = router;