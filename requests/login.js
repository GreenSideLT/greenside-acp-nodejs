const Joi = require('joi');

const rules = {
    allowUnknown: true,
    stripUnknown: true,
    errors: true,
};

const schema = Joi.object({
    name: 
        Joi
        .required(),

    password: 
        Joi
        .required(),
});

const routeValidation = async (req, res, next) => {
    const validated = await schema.validate(req.body, rules);
    if(validated.error) {
        res.status(422).json({
            message: validated.error.details[0].message,
        });
    } else {
        req.body = validated.value;
        next();
    }
}

module.exports = routeValidation;