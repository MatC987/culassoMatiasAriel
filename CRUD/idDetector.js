'use strict'

//Importacion de comandos.

import {read} from "./read.js"
import {rutaListaLibros , tituloLibro} from '../app.js'

// Estructura repetitiva for para identificar la existencia de un libro en la base de datos.

function idDetector () {
    let idsTitulo = read(rutaListaLibros).map(arreglo => arreglo.title)
    let valor = false
    for (let i = 0; i < idsTitulo.length; i++){
        if (idsTitulo[i]===(tituloLibro.toLowerCase())){
            valor = true
        }
    }
    return valor
}

//Exportacion de la funcion IdDetector.

export {
    idDetector
}