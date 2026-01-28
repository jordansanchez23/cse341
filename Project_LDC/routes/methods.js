const router = require('express').Router();
const utilities = require('../utilities/methodsValidation');

const methodsController = require('../controllers/methods');

/***************
 *Methods Collection 
 ***************/
router.get('/', methodsController.getAllMethods);

router.get('/:id', methodsController.getSingleMethod);

router.post('/', 
    utilities.methodRules(),
    utilities.checkMethodErrors,
    methodsController.createMethod);

router.put('/:id', 
    utilities.methodRules(),
    utilities.checkMethodErrors,
    methodsController.updateMethod);

router.delete('/:id', methodsController.deleteMethod);

module.exports = router;