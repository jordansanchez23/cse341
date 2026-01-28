  const { body, validationResult } = require("express-validator")
  const validate = {}

  /*  **********************************
    *  Jobs Validation Rules
    * ********************************* */
    validate.methodRules = () => {
      return [
        body("methodCode")
            .trim()
            .notEmpty()
            .isString(),

        body("methodName")
            .trim()
            .notEmpty()
            .isString(),

        body("department")
            .trim()
            .notEmpty()
            .isString(),
            
        body("matrix")
            .trim()
            .notEmpty()
            .isString(),
            
        body("active")
            .notEmpty()
            .isBoolean()
      ]

    };

/* ******************************
 * Check data and return errors or continue
 * ***************************** */
validate.checkMethodErrors = async (req, res, next) => {

  let errors = []
  errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).json({
        errors:errors.array()
    })
        }
    next()
}

module.exports = validate;