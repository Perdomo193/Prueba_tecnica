const { Router } = require('express');
const router = Router();

const { getUsers, createUsers, getUserId, deleteUsers, updateUser} = require('../controllers/index.controller');

router.get('/users', getUsers);
router.post('/users', createUsers);
router.get('/users/:nro_tarjeta', getUserId);
router.delete('/users/:nro_tarjeta', deleteUsers);
router.put('/users/:nro_tarjeta', updateUser);

module.exports = router;