import { Router } from 'express';

import accountsRoutes from './accounts.routes';
import sessionsRoutes from './sessions.routes';

const routes = Router();

routes.use('/login', sessionsRoutes);
routes.use('/sign-up', accountsRoutes);

export default routes;
