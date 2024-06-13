import { Router } from "express";

import { ConceptoRoutes } from "./Concepto/routes";
import { CajaRoutes } from "./Caja/routes";
import { TransaccionRoutes } from "./Transacción/routes";
import { GithubRoutes } from "./github/github.routes";

export class AppRoutes { 

    static get routes(): Router {
        const router = Router();

        router.use('/conceptos', ConceptoRoutes.routes);
        router.use('/cajas', CajaRoutes.routes);
        router.use('/transacciones', TransaccionRoutes.routes);

        //github
        router.use('/github', GithubRoutes.routes);

        return router;
    }
}
