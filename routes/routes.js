import express from 'express'

const router = express.Router()

router.get('/', (req, res) => { //req: lo que enviamos  res: lo que Express nos responde (si el usuario está autenticado, si falló la autenticación etc...)
    res.render('archivopug', { // al render le pasas el nombre del archivo pug que quieras mostrar y también le puedes pasar un obj, la variable del objeto es la que mostrará, esa variable estará en cada uno de los pug
        pagina: 'Inicio'
    })

})
router.get('/nosotros', (req, res) => {
    res.render('nosotros', {
        pagina: 'Nosotros'
    })
})
router.get('/viajes', (req, res) => {
    res.render('viajes', {
        pagina: 'Viajes'
    })
})
router.get('/testimonios', (req, res) => {
    res.render('testimonios', {
        pagina: 'Testimonios'
    })
})

export default router