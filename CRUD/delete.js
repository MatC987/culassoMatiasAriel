'use strict'

//importacion de comandos

import {read} from "./read.js"
import {write} from './write.js'
import {rutaListaLibros} from '../app.js'

// Estructura repetitiva for para identificar el libro a eliminar

function borrar (titulo){
    let archivo = read(rutaListaLibros)
    for (let i = 0; i < archivo.length; i++){
        if (archivo[i].title === titulo.toLowerCase()){
            let archivoSinLibro = archivo.filter(libro => libro !== archivo[i])
            console.log('\n \nEl libro ' + titulo.toLowerCase() + ' ha sido eliminado exitosamente de la base de datos. \n \n')
            return write(archivoSinLibro)
        }
    }
    return console.log('\n \nEl libro ' + titulo.toLowerCase() + ' no se encuentra cargado en la base de datos. \n \n')
}

//Exportacion de la funcion borrar

export {
    borrar
}