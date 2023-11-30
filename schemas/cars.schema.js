const Joi = require('joi');

const id = Joi.number()
const marca = Joi.string().min(2).max(50)
const linea = Joi.string().min(2).max(50)
const modelo = Joi.number()
const color = Joi.string().min(2).max(50)
const compra = Joi.date()

const createCarSchema = Joi.object({
    marca: marca.required(),
    linea: linea.required(),
    modelo: modelo.required(),
    color: color.required(),
    compra: compra.required()
});

const updateCarSchema = Joi.object({
    marca: marca.required(),
    linea: linea.required(),
    modelo: modelo.required(),
    color: color.required(),
    compra: compra.required()
});

const getCarSchema = Joi.object({
    id: id.required()
});

module.exports = {
    createCarSchema,
    updateCarSchema,
    getCarSchema
}