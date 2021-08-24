// el controlador es el que le pasa los datos a la vista para que lo muestre

import {Viaje} from '../models/Viaje.js' // importamos el modelo que hemos definido en models

const paginaInicio = (req, res) => { //req: lo que enviamos  res: lo que Express nos responde (si el usuario está autenticado, si falló la autenticación etc...)
    res.render('archivopug', { // al render le pasas el nombre del archivo pug que quieras mostrar y también le puedes pasar un obj, la variable del objeto es la que mostrará, esa variable estará en cada uno de los pug
        pagina: 'Inicio'
    })
}

const paginaNosotros = (req, res) => {
    res.render('nosotros', {
        pagina: 'Nosotros'
    })
}

// vamos a psar los viajes hacia la vista del MVC
const paginaViajes = async (req, res) => {
//consutar BBDD
const todosLosViajes= await Viaje.findAll() //Viaje es el modelo de la BBDD en models
console.log(todosLosViajes); // para ver este CL debo navegar a la url de /viajes


    res.render('viajes', {
        pagina: 'Viajes',
        resultado: todosLosViajes
    })
}

const paginaTestimonios = (req, res) => {
    res.render('testimonios', {
        pagina: 'Testimonios'
    })
}

export {
    paginaInicio,
    paginaNosotros,
    paginaViajes,
    paginaTestimonios
}