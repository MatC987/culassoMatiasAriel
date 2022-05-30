'use strict'

//importación de comandos

import fs from 'fs'
import {read} from "./CRUD/read.js"
import {add} from "./CRUD/add.js"
import {edit} from './CRUD/edit.js'
import {borrar} from './CRUD/delete.js'

//Codigo para la carga de comandos por terminal

const [ , ,comando,tituloLibro,autorLibro,generoLibro,publicacionLibro,precioCompra,precioVenta] = process.argv

var rutaListaLibros = './booksData.json' // Ubicacion de base de datos de libros

//Estructura selectiva switch para interpretar la correcta carga de los comandos a utilizar.

switch (comando){
    case 'read':
        console.log('\n \n ---------- Lista de libros disponibles ---------- \n \n')
        console.log(read(rutaListaLibros))
        console.log('\n \n ------------------------------------------------- \n \n')
        break
    case 'new':
        add(tituloLibro,autorLibro,generoLibro,publicacionLibro,precioCompra,precioVenta)
        break
    case 'edit':
        edit(tituloLibro,autorLibro,generoLibro,publicacionLibro,precioCompra,precioVenta)
        break
    case 'delete':
        borrar(tituloLibro)
        break
    case 'help':
        console.log(fs.readFileSync('./instrucciones.txt').toString())
        break
    default:
        console.log('\nEl comando ' + comando +  ' ingresado por terminal es incorrecto. \n')
        console.log('\nComandos validos: \n')
        console.log('read: muestra por terminal el listado de libros disponibles en la base de datos. \n')
        console.log('new: Agrega nuevo libro a la base de datos. \n')
        console.log('edit: Edita características de un libro disponible en la base de datos. \n')
        console.log('delete: elimina un libro disponible en la base de datos.\n')
        console.log('En caso de necesitar más información, escribir por terminal el comando help. \n')
        break
}

// Exportacion de la ruta de ubicacion de la base de datos y titulo del libro cargado

export{
    rutaListaLibros,
    tituloLibro
}