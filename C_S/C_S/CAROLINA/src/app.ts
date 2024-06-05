import server from 'express';
import cors from 'cors'; // Importa el paquete cors
import { aspirante,curso,inscripcion,conexion  } from './rutas/index';

const app = server();

// Habilita CORS
app.use(cors());

app.use(server.json());

// Aquí puedes configurar tus rutas
app.use('/aspirante', aspirante);
app.use('/curso', curso);
app.use('/inscripcion', inscripcion);
app.use('/conexion', conexion);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});