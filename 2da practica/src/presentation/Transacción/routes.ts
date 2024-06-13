import { Router } from 'express';
import { TransaccionController } from './controller.ddd';
import { TransaccionDatasourceImpl } from "../../infraestructure/datasource/Transacción.datasource.impl";
import { TransaccionRepositoryImpl } from '../../infraestructure/repositories/Transacción.repository.impl';

export class TransaccionRoutes {

  static get routes(): Router {

    const router = Router();

    const datasource = new TransaccionDatasourceImpl();
    const transaccionRepository = new TransaccionRepositoryImpl(datasource);
    const transaccionController = new TransaccionController(transaccionRepository);

    router.get('/', transaccionController.getTransacciones);
    router.get('/:id', transaccionController.getTransaccionById);
    router.post('/', transaccionController.createTransaccion);
    router.put('/:id', transaccionController.updateTransaccion);
    router.delete('/:id', transaccionController.deleteTransaccion);

    return router;
  }
}
