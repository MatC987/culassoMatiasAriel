'use strict'

//importacion de comandos

import {read} from "./read.js"
import {write} from './write.js'
import {rutaListaLibros} from '../app.js'

// Estructura repetitiva for para identificar el libro a editar

function edit(titulo, nuevoAutor, nuevoGenero, nuevaPublicacion, nuevoPrecioCompra, nuevoPrecioVenta){
    let archivoActualizado = read(rutaListaLibros)
    for (let i = 0 ; i < archivoActualizado.length; i++){
        if (archivoActualizado[i].title === titulo.toLowerCase()){
            archivoActualizado[i].author = nuevoAutor.toLowerCase()
            archivoActualizado[i].genre = nuevoGenero.toLowerCase()
            archivoActualizado[i].year = nuevaPublicacion
            archivoActualizado[i].cost = nuevoPrecioCompra
            archivoActualizado[i].price = nuevoPrecioVenta
            console.log(' \n \nSe han cargado exitosamente los nuevos datos en el libro ' + titulo.toLowerCase() + '\n \n')
            console.log(archivoActualizado[i])
            console.log('\n \n')
            return write(archivoActualizado)
        }
    }
    return console.log('\n \nEl libro ' + titulo.toLowerCase() + ' no se encuentra cargado en la base de datos. \n \n')
}

//Exportacion de la funcion edit

export {
    edit
}