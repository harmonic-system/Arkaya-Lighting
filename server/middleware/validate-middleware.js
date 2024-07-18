const validate = (schema) => async (req, res, next) => {
    try {
        const parseBody = await schema.parseAsync(req.body);
        req.body = parseBody;
        return next();
    } catch (err) {
        const status = 422;
        const message = err.errors[0].message;
        const extraDetails = err.issues.map((curElem) => curElem.message);

        const error = {
            status,
            message,
            extraDetails,
        };

        next(error);
    }
};

module.exports = validate;