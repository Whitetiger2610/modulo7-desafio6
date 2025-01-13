# Desafio 6: Auttenticacion y Autorización de usuario con JWT

Modulo 7: Desafio Soft- Jobs

Instrucciones para el usuario

Descargar el archivo presionando en el botón verde que indica "Code", y luego en Download ZIP

Descomprimir modulo7-desafio6-main.zip en un directorio deseado

Abrir la carpeta modulo7-desafio6-main en Visual Studio Code

Abrir 2 terminales e ir ejecutando, mediante la tecla Enter, lo siguiente:

Terminal I
cd backend-desafio-soft-jobs

nodemon index.js

Terminal II
cd frontend-desafio-soft-jobs

npm i

npm run dev

Finalmente, mantener presionada la tecla ctrl y clickear sobre el link localhost generado.

⚠️ Importante ⚠️
Se debe contar con una base de datos en PostgreSQL llamada "softjobs":

CREATE DATABASE softjobs;

Dicha base de datos debe contener la siguiente tabla llamada "usuarios":

CREATE TABLE usuarios ( id SERIAL, email VARCHAR(50) NOT NULL, password VARCHAR(60) NOT NULL, rol VARCHAR(25), lenguage VARCHAR(20) );

SELECT * FROM usuarios;

Cómo usar la aplicación

Considerar que solo funcionará habiendo completado los pasos de los items anteriores:

En la propia página

Se tiene una interfaz de registro que se activa al dar click en el botón "Registrarse. Para registrar un usuario nuevo escribir y/o seleccionar sobre los campos de "Email address", "Password", "Rol" y "Lenguage"

Para culminar, debe presionar el botón "Registrarme"

Si el usuario fue registrado exitosamente, saldrá una ventan informando regitro exitoso.

Se tiene una interfaz de logue que se activa al dar click en el botón "Login". Para realizar el logue del usuario escribir sobre los campos de "Email address" y "Password"

Para culminar, debe presionar el botón "Iniciar Sesión"

Si el usuario fue autenticado exitosamente, saldrá una ventana informando autenticación exitosa.

Créditos
De Mauricio González Agudelo para Desafío Latam, FullStack Javascript, Generación 68.

