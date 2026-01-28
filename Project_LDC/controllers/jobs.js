const mongodb = require('../data/database');
const ObjectId = require('mongodb').ObjectId;

const getAllJobs = async (req, res) => {
    try{
    //#swagger.tags=['Jobs']
    const result = await mongodb.getDb().db().collection('jobs').find();
    result.toArray().then((jobs) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(jobs);
    });
    } catch(error) {
        res.status(500).json('Some error occurred while getting the list of jobs.')
    };
};

const getSingleJob = async (req, res) => {
    try{
    //#swagger.tags=['Jobs']
    const jobId = new ObjectId(req.params.id);
    const result = await mongodb.getDb().db().collection('jobs').find({_id: jobId});
    result.toArray().then((jobs) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(jobs[0]);
    });
    } catch(error) {
        res.status(500).json('Some error occurred while getting the single job.')
    }
};

const createJob = async (req, res) => {
    try{    
    //#swagger.tags=['Jobs']
    const job = {
        jobNumber: req.body.jobNumber,
        client: req.body.client,
        office: req.body.office,
        projectName: req.body.projectName,
        lab: req.body.lab,
        receivedDate: req.body.receivedDate,
        dueDate: req.body.dueDate,
        status: req.body.status
    };
    const response = await mongodb.getDb().db().collection('jobs').insertOne(job);
    if (response.acknowledged >0) {
        res.status(201).send();
    } else {
        res.status(500).json(response.error || 'Some error occurred while creating the job.')
    }

    } catch (error) {
        res.status(500).json('Some error occurred while creating the job.')
    }
};

const updateJob = async (req, res) => {
    try {    //#swagger.tags=['Jobs']
    const jobId = new ObjectId(req.params.id);
    const job = {
        jobNumber: req.body.jobNumber,
        client: req.body.client,
        office: req.body.office,
        projectName: req.body.projectName,
        lab: req.body.lab,
        receivedDate: req.body.receivedDate,
        dueDate: req.body.dueDate,
        status: req.body.status
    };
    const response = await mongodb.getDb().db().collection('jobs').replaceOne({_id: jobId}, job);
    if (response.modifiedCount > 0) {
        res.status(204).send();
    } else {
        res.status(500).json(response.error || 'Some error occurred while updating the job.')
    }
    } catch(error) {
        res.status(500).json('Some error occurred while updating the job.')
    }
};

const deleteJob = async (req, res) => {
    try {
    //#swagger.tags=['Jobs']
    const jobId = new ObjectId(req.params.id);
    const response = await mongodb.getDb().db().collection('jobs').deleteOne({_id: jobId});
    if (response.deletedCount > 0) {
        res.status(204).send();
    } else {
        res.status(500).json(response.error || 'Some error occurred while deleting the job.')
    }
    } catch(error) {
        res.status(500).json('Some error occurred while deleting the job.')
    }
};

module.exports = {
    getAllJobs,
    getSingleJob,
    createJob,
    updateJob,
    deleteJob
}