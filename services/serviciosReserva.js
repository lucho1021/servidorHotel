//Importo el modelo de datos

const ReservaModelo = require('../models/ReservaModelo.js')

//Servicio para agregar un documento a la bd

async function insertarReserva(datosReserva){

    let reservaAInsertar = new ReservaModelo(datosReserva)

    return await reservaAInsertar.save()

}

//Servicio para buscar una Reserva en la bd
async function leerReserva(id){

   let reserva = await ReservaModelo.findById(id)
   return reserva

}

//Servicio para buscar todos los documentos de las Reservas
async function leerReservas(){
    let reservas = await ReservaModelo.find()
    return reservas

}

//Servicio para editar un documento de la Reserva
async function modificarReserva(id, datos){

    return await ReservaModelo.findByIdAndUpdate(id, datos)


}

//Servicio para eliminar un documento de la Reserva
async function borrarReserva(id){

    return await ReservaModelo.findByIdAndDelete(id)

}

module.exports = { 
insertarReserva,
leerReserva,
leerReservas,
modificarReserva,
borrarReserva
}