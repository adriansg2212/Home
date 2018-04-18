const express = require('express');
const router = express.Router();
const moviesController = require ('../controllers/moviesController')

/* GET users listing. */
router.get('/:page?', moviesController.index);

router.post('/', moviesController.create);

router.put('/:id', moviesController.update);

router.delete('/:id', moviesController.remove);

 
module.exports = router;
/*
CoC- Convention over configuration

API RESTFULL
PUT, GET,POST,DELETE metodos http, la ruta , controlador
el controlador va hacer un archivo javascript que va tener 
MVC
Movie /movies 
metodo  ruta    controlador
get   /movies   MoviesControllers.index 
post  /movies   MoviesControllers.create
put   /movies/:id  MoviesControllers.update(:id)
delete /movies/:id  MoviesControllers.remove(:id)


*/ 