import { Router } from 'express';
import { CajaController } from './controller.ddd';
import { CajaDatasourceImpl } from "../../infraestructure/datasource/Caja.datasource.impl";
import { CajaRepositoryImpl } from '../../infraestructure/repositories/Caja.repository.impl';

export class CajaRoutes {

  static get routes(): Router {

    const router = Router();

    const datasource = new CajaDatasourceImpl();
    const cajaRepository = new CajaRepositoryImpl(datasource);
    const cajaController = new CajaController(cajaRepository);

    router.get('/', cajaController.getCajas);
    router.get('/:id', cajaController.getCajaById);
    router.post('/', cajaController.createCaja);
    router.put('/:id', cajaController.updateCaja);
    router.delete('/:id', cajaController.deleteCaja);

    return router;
  }
}
