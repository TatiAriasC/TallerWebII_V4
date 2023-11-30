const {models} = require('../libs/sequelize')

//Funcion para listar todos los carros
async function index() {
    const cars = await models.car.findAll();
    return cars;
}

//Funcion para crear un nuevo carro
async function store(body) {
    const cars = await models.car.create(body);
    return cars;
}

//Funcion para mostrar un carro
async function show(id) {
    const cars = await models.car.findByPk(id);
    return cars;
}

//Funcion para actualizar un carro
async function update(id, body) {
    const [affectedRows, [updatedCar]] = await models.car.update(body, {
        where: {
            id
        },
        returning: true
    });
    return updatedCar;
}

//Funcion para eliminar un carro
async function destroy(id) {
    const cars = await models.car.findByPk(id);
    const deletedCar = await models.car.destroy({
        where: {
            id
        },
        returning: true
    });
    if(deletedCar){
        return cars;
    }
    return null;
}

//Exportar las funciones del controlador
module.exports = {
    index,
    store,
    show,
    update,
    destroy
}