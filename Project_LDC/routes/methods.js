const router = require('express').Router();
const utilities = require('../utilities/methodsValidation');

const methodsController = require('../controllers/methods');

const { isAuthenticated } = require('../middleware/authenticate');

/***************
 *Methods Collection 
 ***************/
router.get('/', methodsController.getAllMethods);

router.get('/:id', methodsController.getSingleMethod);

router.post('/', 
    isAuthenticated,
    utilities.methodRules(),
    utilities.checkMethodErrors,
    methodsController.createMethod);

router.put('/:id', 
    isAuthenticated,
    utilities.methodRules(),
    utilities.checkMethodErrors,
    methodsController.updateMethod);

router.delete('/:id', isAuthenticated, methodsController.deleteMethod);

module.exports = router;