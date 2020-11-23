const { Pool } = require('pg');

const pool = new Pool({
    host: 'localhost',
    user: 'openpg',
    password: '',
    database: 'Tarjetas',
    port: '5432'
});

const getUsers = async (req, res) => {
    const response = await pool.query('SELECT * FROM empleados');
    res.status(200).json(response.rows);
    //console.log(response.rows);
};

const getUserId = async (req, res) => {
    const nro_tarjeta = req.params.nro_tarjeta;
    const response = await pool.query('SELECT * FROM empleados WHERE nro_tarjeta = $1', [nro_tarjeta]);
    res.json(response.rows);
}

const deleteUsers = async (req, res) => {
    const nro_tarjeta = req.params.nro_tarjeta;
    const response = await pool.query('DELETE FROM empleados WHERE nro_tarjeta = $1', [nro_tarjeta]);
    res.json('User ${nro_tarjeta} deleted succesfully');
}

const createUsers = async (req, res) => {
    const {nro_tarjeta, valor, ultimo_valor_pagado, estacion, torno } = req.body;
    const response = await pool.query('INSERT INTO empleados (nro_tarjeta, valor, ultimo_valor_pagado, estacion, torno) VALUES ($1, $2, $3, $4, $5)', [nro_tarjeta, valor, ultimo_valor_pagado, estacion, torno]);
    res.json({
        message: 'User Added Succesfully',
        body: {
            user: {nro_tarjeta, valor, ultimo_valor_pagado, estacion, torno }
        }
    });
};

const updateUser = async (req, res) => {
    const nro_tarjeta = req.params.nro_tarjeta;
    const { valor } = req.body;
    const response = await pool.query('UPDATE empleados SET valor = $1 WHERE nro_tarjeta = $2', [valor, nro_tarjeta]);
    console.log(response);
    res.json('User update succesfully');
}

module.exports = {
    getUsers,
    createUsers,
    getUserId,
    deleteUsers,
    updateUser
}