const router = require('express').Router();

const jobsController = require('../controllers/jobs');

/***************
 *Jobs Collection 
 ***************/

router.get('/', jobsController.getAllJobs);

router.get('/:id', jobsController.getSingleJob);

router.post('/', jobsController.createJob);

router.put('/:id', jobsController.updateJob);

router.delete('/:id', jobsController.deleteJob);

module.exports = router;