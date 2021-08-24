//sintaxis de commonjs, no es nativa de js
// const express = require ('express') 

//actualmente  ya se pueden utilizar modulos e imports nativos de js. Hay que habilitarlo en el packaje.json con"type":"module"
import express from 'express'
import router from './routes/routes.js' // en la nueva versión con los imports, hayq eu colocar la extensión del archivo
import db from './config/db.js'

const app = express()

// conectar la BBDD
db.authenticate()
    .then(() => console.log('Base de datos conectada'))
    .catch(error=> console.log(error));
    
    

// Definimos el puerto. Al hacer el deploy, el port será el que asgine el depliegue, porque nose sabe cual estará disponible, al estar en local, la variable .env.port no existe, por tanto correremos sonre el puerto 4000
const port = process.env.port || 4000

// -----------MIDDELWARES--------


//habilitar PUG, la carpeta views debe ir en minuscula
app.set('view engine', 'pug')

//Obtener el año actual de maner dinámica. next() lo que nos permite es que continue al siguiente middelware, si es este middelware no le pusiera el netx, la pagina no se vería porque no seguiría ejecutando el código. Si continuara sin verse lo forzamos añadiendo el return. Para pasar valores de un archivo a una vista o de un archivo a otro, express utiliza "locals", que son como variables internas, son un objeto y como tal le puedo añadir una proiedad con .unaVariable, en el cl vemos que aparece varias veces, eso es por el .use de express que recoge todos los métodos de manejo de datos (get, post...etc)
app.use((req, res, next) => {

    const year = new Date()

    res.locals.actualYear = year.getFullYear()
    res.locals.nombreSitio = "Agencia de viajes"
    //  console.log(res.locals);

    next()

})

//Definir la carpeta public
app.use(express.static('public'))

//Agregar Router. El use soporta todos los verbos de express GET, POST, PATCH, PUT DELETE, de esta manera a la pag ppal, esta, agrega las rutas que hemos establecido en routes.js
app.use('/', router)




// arranca el servidor
app.listen(port, () => {
    console.log(`Server conenected in the port ${port}`);

})