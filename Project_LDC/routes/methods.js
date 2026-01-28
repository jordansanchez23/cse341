const router = require('express').Router();

const methodsController = require('../controllers/methods');

/***************
 *Methods Collection 
 ***************/
router.get('/', methodsController.getAllMethods);

router.get('/:id', methodsController.getSingleMethod);

router.post('/', methodsController.createMethod);

router.put('/:id', methodsController.updateMethod);

router.delete('/:id', methodsController.deleteMethod);

module.exports = router;