CREATE DATABASE Tarjetas;

CREATE TABLE IF NOT EXISTS empleados(
    nro_tarjeta INTEGER,
    valor INTEGER,
    ultimo_acceso TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    ultimo_valor_pagado INTEGER,
    estacion TEXT,
    torno INTEGER
);

INSERT INTO empleados(nro_tarjeta, valor, ultimo_valor_pagado, estacion, torno) VALUES
	(00001, 50000, 1500, 'SANTA MONICA', 7),
	(00002, 30000, 1500, 'SANTA MONICA', 7),
	(00003, 20000, 1500, 'SANTA MONICA', 7),
	(00004, 50000, 1500, 'SANTA MONICA', 7),
	(00005, 50000, 1500, 'SANTA MONICA', 7),
	(00006, 50000, 1500, 'SANTA MONICA', 7);

