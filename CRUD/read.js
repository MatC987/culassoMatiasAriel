'use strict'

import fs from 'fs' // importación de fs
import {rutaListaLibros} from '../app.js' // importacion de la ubicacion de la base de datos de los libros

//funcion read mediante el metodo ReadFileSync y 

const read = (rutaListaLibros) => JSON.parse(fs.readFileSync(rutaListaLibros).toString())

// Exportacion de la funcion read

export {
    read
}
