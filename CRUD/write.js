'use strict'

import fs from 'fs' // importación de fs
import {rutaListaLibros} from '../app.js' // importacion de la ubicacion de la base de datos de los libros

// Funcion write mediante el metodo WriteFileSync

const write = (rutaListaLibros) => fs.writeFileSync('./booksData.json',JSON.stringify(rutaListaLibros, null, 2))  

// Exportacion de la funcion write

export{
    write
}
