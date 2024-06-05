import server from 'express';
//import cors from 'cors'; // Importa el paquete cors
import { caja,concepto,transaccion,conexion  } from './rutas/index';

const app = server();

// Habilita CORS
//app.use(cors());

app.use(server.json());

// Aquí puedes configurar tus rutas
app.use('/caja', caja);
app.use('/concepto', concepto);
app.use('/transaccion', transaccion);
app.use('/conexion', conexion);

app.listen(4000, () => {
    console.log('Server is running on port 4000');
});