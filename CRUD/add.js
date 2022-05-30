'use strict'

// Importacion de comandos

import {read} from "./read.js"
import {idDetector} from './idDetector.js'
import {write} from './write.js'
import {rutaListaLibros} from '../app.js'

// Estructura de la funcion add para la carga de un nuevo libro y sus caracteristicas cargadas por consola.

function add (titulo, autor, genero, publicacion, precioCompra, precioVenta) {
    let newBook = {
        title: titulo.toLowerCase(), 
        author: autor.toLowerCase(), 
        genre: genero.toLowerCase(), 
        year: publicacion, 
        cost: precioCompra, 
        price: precioVenta
    }
    if (idDetector()){
        return console.log('\n \nYa se encuentra el libro ' + titulo.toLowerCase() + ' cargado en la base de datos\n \n')
    }
    let archivo = read(rutaListaLibros)
    archivo.push(newBook)
    console.log('\n \nEl libro ' + titulo.toLowerCase() + ' ha sido cargado exitosamente: \n \n')
    console.log (newBook)
    console.log('\n \n')
    return write(archivo) 
}

//Exportacion de la funcion add

export {
    add
}



