const router = require('express').Router();

const contactsController = require('../controllers/methods');

router.get('/', contactsController.getAllMethods);

router.get('/:id', contactsController.getSingleMethod);

router.post('/', contactsController.createMethod);

router.put('/:id', contactsController.updateMethod);

router.delete('/:id', contactsController.deleteMethod);

module.exports = router;