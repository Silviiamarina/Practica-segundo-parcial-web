import { Router } from 'express';
import { ConceptoController } from './controller.ddd';
import { ConceptoDatasourceImpl } from "../../infraestructure/datasource/Concepto.datasource";
import { ConceptoRepositoryImpl } from '../../infraestructure/repositories/Concepto.repository.impl';

export class ConceptoRoutes {

  static get routes(): Router {

    const router = Router();

    const datasource = new ConceptoDatasourceImpl();
    const conceptoRepository = new ConceptoRepositoryImpl(datasource);
    const conceptoController = new ConceptoController(conceptoRepository);

    router.get('/', conceptoController.getConceptos);
    router.get('/:id', conceptoController.getConceptoById);
    router.post('/', conceptoController.createConcepto);
    router.put('/:id', conceptoController.updateConcepto);
    router.delete('/:id', conceptoController.deleteConcepto);

    return router;
  }
}
