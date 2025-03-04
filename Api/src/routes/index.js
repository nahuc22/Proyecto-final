const {Router} = require('express');
const router = Router();
const loginRouter = require('./login.js');
const fundacionRouter = require('./fundaciones.js');
const mascotasRouter = require('./mascotas.js');
const adopcionesRouter = require('./adopciones.js');
const donacionesRouter = require('./donaciones.js');

router.use('/usuarios', loginRouter);
router.use('/fundaciones', fundacionRouter);
router.use('/mascotas', mascotasRouter);
router.use('/adopciones', adopcionesRouter);
router.use('/donaciones', donacionesRouter);

module.exports = router; 