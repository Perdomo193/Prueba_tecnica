### Prueba tecnica ANDINA DE SEGURIDAD DEL VALLE LTDA.

#### Punto 1 Ordenamiento de vectores

El algoritmo se encuentra en la carpeta  Prueba_tecnica_Andina, con el nombre de Punto1.js, donde se genera un vector con 100 posiciones, cuyos valores se cargan aleatoriamente, y posteriormente ser ordenados descendentemente.

#### Punto 2.a  Resolucion de problemas
El algoritmo se encuentra en la carpeta  Prueba_tecnica_Andina, con el nombre de Punto2.js, donde se poseen dos ciclos for, con la finalidad de elevar un numero a otro, solo usando sumas.

#### Punto 2.b - Problema de las tarjetas de empleados
El proyecto posee un *Backend* y un *Fronted*, en una carpeta denominada Prueba_tecnica_Andica.

**1. Se debe crear la base de datos**

La base de datos esta creada en postgreSQL, en la siguiente direccion se encuentra el archivo, el cual se debe ejecutar para crear la base de datos.

Prueba_tecnica_Andina\Punto_3\Backend\databases

**2. Ejecutar Backend**

Para la ejecucion del Backend se debe colocar el la ventana de comandos los siguiente:

C:\Users\Desktop\Prueba_tecnica_Andina\Punto_3\Backend>node src/index.js

Con lo cual se observara *Server on Port 3000* en la ventana de comandos.

**3. Ejecutar Frontend**

Luego ejecutamos el Fronted, con la siguiente direccion en la ventana de comandos:

C:\Users\Desktop\Prueba_tecnica_Andina\Punto_3\Frontend>npm run dev 

**Nota: ** Los modulos de axios, express y vue js, ya se encuentran instalados.

Para visualizar la pagina web, situese en el siguiente link:

http://localhost:8080/

**4. Funcionamiento de la aplicacion**

Se tiene un boton de registrar, para lo cual se debe ingresar el numero de la tarjeta.
- Se ingresa el numero de la tarjeta en la casilla libre.
- Se oprime el boton REGISTRAR, con ello se busca en la base de datos la tarjeta correspondiente y se descuenta el valor del billete, en nuestro caso se deja un valor del billete de 1500.
- Si un usuario tiene un saldo menor al valor del billete, se despliga una alerta y le sugiere regarcar su tarjeta. No se cobra si no cuenta con un saldo igual o superior al valor del billete.
- En la parte inferior de la pantalla, se observa los usuarios registrados en la base de datos, con los siguientes datos: 
**Nro de tarjeta, Valor, Ultimo acceso, Ultimo valor pagado, Estacion y Torno**

###  ***Muchas gracias por la oportunidad de presentar esta prueba***