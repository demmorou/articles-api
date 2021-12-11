import { Router } from 'express';

import accountsRoutes from './accounts.routes';
import authorsRoutes from './authors.routes';
import sessionsRoutes from './sessions.routes';

const routes = Router();

routes.use('/login', sessionsRoutes);
routes.use('/sign-up', accountsRoutes);

routes.use('/admin/authors', authorsRoutes);

export default routes;
