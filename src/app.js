//Configurar el servidor express, inicializar el servidor Socket.io y ademas establecer las rutas

import express from 'express';
import handlebars from 'express-handlebars';
import __dirname from './utils.js';

//Importamos los routers 
import viewsRouter from './routes/views.router.js';

//Importamos el constructor de un servidor de sockets 
import { Server } from 'socket.io'

const app = express();

const htppServer = app.listen(8080, () => {

    console.log('Listening on PORT 8080'); //Servidor HTTP
});

//Creamos un servidor de socket que vive dentro de nuestro servidor HTPP 
const io = new Server(htppServer);

//Configuramos todo lo referente a la plantilla 
app.engine('andlebars', handlebars.engine());
app.set('view', __dirname + 'views');
app.set('views engine', 'handlebars');
//Cargamos la carpeta 'public' como nuestra carpeeta de archivos estatitos
app.use(express.static(__dirname + '/public'));
//Usamos el enrutador para las vistas 
app.use('/', viewsRouter);