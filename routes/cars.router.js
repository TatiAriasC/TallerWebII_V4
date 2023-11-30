
//Crear un enrutador de express en el que todas las rutas inician con api
const router = require('express').Router();
const fs = require('fs');
const nodemailer = require('nodemailer');
const {validatorHandler} = require('../middlewares/validator.handler');

const { getCarSchema, createCarSchema, updateCarSchema } = require('../schemas/cars.schema');

//Modulos internas
const writeFile = require('../files');
const LOG_FILE_NAME = 'access_log.txt';

//Importar el controlador de eventos
const service = require('../services/cars.service');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'tatiana.arias39089@ucaldas.edu.co',
      pass: '0000039089',
    },
  });

// Función para enviar un correo electrónico
const sendEmail = (subject, text) => {
    const mailOptions = {
      from: 'tatiana.arias39089@ucaldas.edu.co',
      to: 'tatiana.arias39089@ucaldas.edu.co',
      subject: subject,
      text: text,
    };
  
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Error al enviar el correo electrónico:', error);
      } else {
        console.log('Correo electrónico enviado:', info.response);
      }
    });
  };

//Definir las rutas de la aplicación
router.get('/', async (req,res)=>{
    const data = await service.index()
    res.json(data);

    const currentTime = new Date().toISOString();
    const logEntry = `${currentTime} [GET] ListarCarrosAPI /carros`;
    
    fs.appendFile(LOG_FILE_NAME, logEntry + '\n', (err) => {
        if (err) {
            console.error('Error al escribir en el archivo de registro.', err);
        }
    });
});

router.get('/:id',
validatorHandler(getCarSchema, 'params'),
    async (req,res)=>{
        const id = req.params.id
        const event = await service.show(id)
        res.json(event)

        const currentTime = new Date().toISOString();
        const logEntry = `${currentTime} [GET] ListarUnCarroAPI /carros`;
        
        fs.appendFile(LOG_FILE_NAME, logEntry + '\n', (err) => {
            if (err) {
                console.error('Error al escribir en el archivo de registro.', err);
            }
        });
    }
);

router.post('/', 
validatorHandler(createCarSchema, 'body'),
    async (req,res)=>{
        const body = req.body
        const event = await service.store(body)
        res.status(201).json(event)

        const currentTime = new Date().toISOString();
        const logEntry = `${currentTime} [POST] CrearCarroAPI /carros`;
        
        fs.appendFile(LOG_FILE_NAME, logEntry + '\n', (err) => {
            if (err) {
                console.error('Error al escribir en el archivo de registro.', err);
            }
        });

        // Envío de correo electrónico
        const emailSubject = 'Nuevo carro creado';
        const emailText = 'Se ha creado un nuevo carro.';

        sendEmail(emailSubject, emailText);
    }
);

router.put('/:id', 
validatorHandler(getCarSchema, 'params'),
validatorHandler(updateCarSchema, 'body'),
    async (req,res)=>{
        const id = req.params.id
        const body = req.body
        const event = await service.update(id, body)
        res.json(event)

        const currentTime = new Date().toISOString();
        const logEntry = `${currentTime} [PUT] EditarCarroAPI /carros`;
        
        fs.appendFile(LOG_FILE_NAME, logEntry + '\n', (err) => {
            if (err) {
                console.error('Error al escribir en el archivo de registro.', err);
            }
        });
    }
);

router.delete('/:id', 
validatorHandler(getCarSchema, 'params'),
    async (req,res)=>{
        const id = req.params.id
        const event = await service.destroy(id)
        res.json(event)

        const currentTime = new Date().toISOString();
        const logEntry = `${currentTime} [DELETE] EliminarCarroAPI /carros`;
        
        fs.appendFile(LOG_FILE_NAME, logEntry + '\n', (err) => {
            if (err) {
                console.error('Error al escribir en el archivo de registro.', err);
            }
        });
    }
);

//Exportar el enrutador
module.exports = router;