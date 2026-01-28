const mongodb = require('../data/database');
const ObjectId = require('mongodb').ObjectId;

const getAllMethods = async (req, res) => {
    try{
    //#swagger.tags=['Methods']
    const result = await mongodb.getDb().db().collection('methods').find();
    result.toArray().then((methods) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(methods);
    });
    } catch(error) {
        res.status(500).json('Some error occurred while getting the list of methods.')
    };
};

const getSingleMethod = async (req, res) => {
    try{
    //#swagger.tags=['Methods']
    const methodId = new ObjectId(req.params.id);
    const result = await mongodb.getDb().db().collection('methods').find({_id: methodId});
    result.toArray().then((methods) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(methods[0]);
    });
    } catch(error) {
        res.status(500).json('Some error occurred while getting the single method.')
    }
};

const createMethod = async (req, res) => {
    try{    
    //#swagger.tags=['Methods']
    const method = {
        methodCode: req.body.methodCode,
        methodName: req.body.methodName,
        department: req.body.department,
        matrix: req.body.matrix,
        active: req.body.active
    };
    const response = await mongodb.getDb().db().collection('methods').insertOne(method);
    if (response.acknowledged >0) {
        res.status(201).send();
    } else {
        res.status(500).json(response.error || 'Some error occurred while creating the method.')
    }

    } catch (error) {
        res.status(500).json('Some error occurred while creating the method.')
    }
};

const updateMethod = async (req, res) => {
    try {    
    //#swagger.tags=['Methods']
    const methodId = new ObjectId(req.params.id);
    const method = {
        methodCode: req.body.methodCode,
        methodName: req.body.methodName,
        department: req.body.department,
        matrix: req.body.matrix,
        active: req.body.active
    };
    const response = await mongodb.getDb().db().collection('methods').replaceOne({_id: methodId}, method);
    if (response.modifiedCount > 0) {
        res.status(204).send();
    } else {
        res.status(500).json(response.error || 'Some error occurred while updating the method.')
    }
    } catch(error) {
        res.status(500).json('Some error occurred while updating the method.')
    }
};

const deleteMethod = async (req, res) => {
    try {
    //#swagger.tags=['Methods']
    const methodId = new ObjectId(req.params.id);
    const response = await mongodb.getDb().db().collection('methods').deleteOne({_id: methodId});
    if (response.deletedCount > 0) {
        res.status(204).send();
    } else {
        res.status(500).json(response.error || 'Some error occurred while deleting the method.')
    }
    } catch(error) {
        res.status(500).json('Some error occurred while deleting the method.')
    }
};

module.exports = {
    getAllMethods,
    getSingleMethod,
    createMethod,
    updateMethod,
    deleteMethod
}