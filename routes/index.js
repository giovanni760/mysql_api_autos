const { Router } = require('express');
const controllers = require('../controllers');

const router = Router();

router.get('/', (req, res) => res.send('Welcome'));

router.post('/cars', controllers.createCars);
router.get('/cars', controllers.getAllCars);

module.exports = router;

