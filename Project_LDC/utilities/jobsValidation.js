  const { body, validationResult } = require("express-validator")
  const validate = {}

  /*  **********************************
    *  Jobs Validation Rules
    * ********************************* */
    validate.jobRules = () => {
      return [
        body("jobNumber")
            .notEmpty()
            .isNumeric(),

        body("client")
            .trim()
            .notEmpty()
            .isString(),

        body("office")
            .trim()
            .notEmpty()
            .isString(),
            
        body("projectName")
            .trim()
            .notEmpty()
            .isString(),
      
        body("lab")
            .trim()
            .notEmpty()
            .isString(),
      
        body("receivedDate")
            .notEmpty()
            .isISO8601(),
      
        body("dueDate")
            .notEmpty()
            .isISO8601(),
      
        body("status")
            .notEmpty()
            .isBoolean()
      ]

    };

/* ******************************
 * Check data and return errors or continue
 * ***************************** */
validate.checkJobsErrors = async (req, res, next) => {

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