const { Router } = require('express')

//Importo los controladores

//Controlador Reservas
const { registarReserva } = require('../controllers/controladorReservas.js')
const { buscarReserva } = require('../controllers/controladorReservas.js')
const { buscarReservas } = require('../controllers/controladorReservas.js')
const { editarReserva } = require('../controllers/controladorReservas.js')
const { eliminarReserva } = require('../controllers/controladorReservas.js')

//Controlador Habitaciones
const { registarHabitacion } = require('../controllers/controladorHabitaciones.js')
const { buscarHabitacion } = require('../controllers/controladorHabitaciones.js')
const { buscarHabitaciones } = require('../controllers/controladorHabitaciones.js')
const { editarHabitacion } = require('../controllers/controladorHabitaciones.js')
const { eliminarHabitacion } = require('../controllers/controladorHabitaciones.js')

const rutas = Router()

//Rutas del api de las Reservas
rutas.get('/avanzada/v1/reserva/:id', buscarReserva)
rutas.get('/avanzada/v1/reservas', buscarReservas)  
rutas.post('/avanzada/v1/reserva', registarReserva)
rutas.put('/avanzada/v1/reserva/:id', editarReserva)
rutas.delete('/avanzada/v1/reserva/:id', eliminarReserva)

//Rutas del api de las Habitaciones
rutas.get('/avanzada/v1/habitacion/:id', buscarHabitacion)
rutas.get('/avanzada/v1/habitaciones', buscarHabitaciones)  
rutas.post('/avanzada/v1/habitacion', registarHabitacion)
rutas.put('/avanzada/v1/habitacion/:id', editarHabitacion)
rutas.delete('/avanzada/v1/habitacion/:id', eliminarHabitacion)

module.exports = rutas