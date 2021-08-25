// el controlador es el que le pasa los datos a la vista para que lo muestre

import {Viaje} from '../models/Viaje.js' // importamos el modelo que hemos definido en models
import {Testimonios} from '../models/Testimonios.js' // importamos el modelo que hemos definido en models


const paginaInicio = async (req, res) => { //req: lo que enviamos  res: lo que Express nos responde (si el usuario está autenticado, si falló la autenticación etc...)

    //consultar 3 viajes del modelo Viaje. Con el async await se bloquea el código, es decir, el 1er await bloquea la línea siguiente hasta que la primera se ha ejecutado, por tanto no se mostrarán en el res.render ni resultado ni testimonios hasta que, realmente, se hayan obtenidos los datos con los await. Es una buena manera de. cuando estás consultando una BBDD no renderizar nada antes de que se hayan cargado todos los datos, pero, en este caso, nos interesa que ambas solicitudes a la BBDD se ejecuten al mismo tiempo, por tanto cambio el código. Esto mejora muchísimo el performance
     const promiseDB = []

     promiseDB.push(Viaje.findAll({limit: 3})) // sería la posición 0 del array
     promiseDB.push(Testimonios.findAll({limit: 3})) // sería la posición 1 del array
     

    try {
     /*    const resultado = await Viaje.findAll({limit: 3})
        const testimonios = await Testimonios.findAll({limit: 3}) //renderizamos en el inicio solo 3 testimonios */

        const viajes = await Promise.all(promiseDB) // arrancan ambas solicitudes al mismo tiempo

        res.render('archivopug', { // al render le pasas el nombre del archivo pug que quieras mostrar y también le puedes pasar un obj, la variable del objeto es la que mostrará, esa variable estará en cada uno de los pug
            pagina: 'Inicio',
            clase: 'home',
            viajes: viajes[0], //objet literal
            testimonios: viajes[1]
        })

    }catch (e) {
        console.log(e);
        
    }   
}

const paginaNosotros = (req, res) => {
    res.render('nosotros', {
        pagina: 'Nosotros'
    })
}

// vamos a pasar los viajes hacia la vista del MVC. el método.finAll() nos devuelve un array
const paginaViajes = async (req, res) => {
//consutar BBDD
const viajes= await Viaje.findAll() //Viaje es el modelo de la BBDD en models
console.log(viajes); // para ver este CL debo navegar a la url de /viajes


    res.render('viajes', {
        pagina: 'Próximos Viajes',
        viajes, //objet literal
    })
}

//le ponemos async ya que vamos a ostrar datos de la BBDD y esto no sabemos cuánto tiempo puee tarder, también tiene que utilizar un try catch. el método.finAll() nos devuelve un array
const paginaTestimonios = async (req, res) => {
    try {
        const testimonios = await Testimonios.findAll()
        res.render('testimonios', {
            pagina: 'Testimonios',
            testimonios //objet literal testimonios: testimonios
        })

    }catch (e) {
        console.log(e);
        
    }
  
}

const paginaDetalleViaje = async (req, res) => {
   /*  utilizamos el req.params para obtener información de un elemento de un catálogo de colecciones, por ejemplo si tuvieras una API donde /collections te da el listado de colecciones. Pero queremos ver mas información a detalle un elemento la url sería /collections/5 donde internamente nuestro path es /collections/:id, entonces a través de req.params podemos obtener el valor de id => req.params.id.
  console.log(req.params);  */

  const {slug} = req.params
  //con where va a buscar en BBDD donde el slug sea igual a p.e.rio-janeiro (según el botón de Mas info que pinchemos) y lo va a guardar en la variable resultado
  try {
      const viaje = await Viaje.findOne({where: {slug: slug}})
      console.log(viaje)
      res.render('detalleViaje', {
          pagina: 'Información Viaje',
          viaje: viaje
      })

  }catch (e){
      console.log(e);
  }
  
}

export {
    paginaInicio,
    paginaNosotros,
    paginaViajes,
    paginaTestimonios,
    paginaDetalleViaje
}