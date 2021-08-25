import express from 'express'
import {paginaInicio, paginaNosotros, paginaViajes, paginaTestimonios, paginaDetalleViaje} from '../controllers/paginasController.js'

const router = express.Router()

// '/' ruta asociada, y paginaInicio es la función que se crea en el controlador
router.get('/', paginaInicio)

router.get('/nosotros', paginaNosotros)

router.get('/viajes', paginaViajes)
router.get('/viajes/:slug', paginaDetalleViaje)


router.get('/testimonios', paginaTestimonios)

export default router