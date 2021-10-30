const HabitacionModelo = require('../models/HabitacionModelo.js')

async function insertarHabitacion(datosHabitacion){

    let habitacionAInsertar = new HabitacionModelo(datosHabitacion)

    return await habitacionAInsertar.save()

}

async function leerHabitacion(id){

    let habitacion = await HabitacionModelo.findById(id)
    return habitacion
 
 }

//Servicio para buscar todos los documentos de las habitaciones
async function leerHabitaciones(){

    let habitaciones = await HabitacionModelo.find()
    return habitaciones

}

//Servicio para editar un documento de la Habitacion
async function modificarHabitacion(id, datos){

    return await HabitacionModelo.findByIdAndUpdate(id, datos)

}

//Servicio para eliminar un documento de la Habitacion
async function borrarHabitacion(id){

    return await HabitacionModelo.findByIdAndDelete(id)

}

module.exports = { 
insertarHabitacion,
leerHabitacion,
leerHabitaciones,
modificarHabitacion,
borrarHabitacion
}