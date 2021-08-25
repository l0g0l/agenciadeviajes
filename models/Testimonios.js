import Sequelize from 'sequelize'
import db from '../config/db.js'

// este testimonios es el nombre de la tabla de la BBDD
export const Testimonios = db.define('testimonios', {
    nombre: {
        type: Sequelize.STRING
    },
    correo: {
        type: Sequelize.STRING
    },
    mensaje: {
        type: Sequelize.STRING
    }
    
})
