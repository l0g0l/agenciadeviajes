import {Testimonios} from '../models/Testimonios.js' // importamos el modelo que hemos definido en models


//cuando trabajamos con BBDD es mejor hacerlo cpn async await con un try catch ya que puede tardar en meter los datos en la BBDD
const guardarTestimonio = async (req, res) => {
    console.log(req.body);

    //validar
    const{nombre, correo, mensaje}=req.body
    // con este array conseguimos guardar todos los errores y poder iterar sobre ellos para mostrarlos
    const errores = []

    //.trim() quita los espacios en blanco al principio y al final. Para validar se podría utilizar Express-validator 
    if(nombre.trim() === ''){
        errores.push({mensaje: 'El nombre está vacío'})
    }
    if(correo.trim() === ''){
        errores.push({mensaje: 'El correo está vacío'})
    }
    if(mensaje.trim() === ''){
        errores.push({mensaje: 'El mensaje está vacío'})
    }
    // al menos hay un error, quizás rellenó 2 campos y no el tercero, igualmente se mostrará el mensaje de error
    if(errores.length>0) {
        //consultamos en la BBDD los testimonios ya existentes
        const testimonios = await Testimonios.findAll()

        //mostrar la visdta con errores
        res.render('testimonios', {
            pagina:'Testimonios',
            errores: errores,
            nombre, //esto es objet literal, es lo mismo que poner nombre:nombre
            correo,
            mensaje,
            testimonios // aqui los renderizamos
        })
        // añadimos al render las variables de nombre, correo y mensaje para que, si no rellenas un campo del formulario, no te vacíe el resto de campos que haya escrito. Luego se lo pasamos a cada input del pug como un value= nombre, value= correo...etc
    }else{
        //si todos los campos están rellenos, los almacenamos en la BBDD

         try{
             await Testimonios.create ({
                nombre,
                correo,
                mensaje
             })
             // una vez añadidos a la BBDD se que pensando...hay que redireccionar al usuario a a misma pag
            res.redirect('/testimonios')
         }catch (e) {
             console.log(e);
             
         }
    }
    
}

export {
    guardarTestimonio
}