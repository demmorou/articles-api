import { Router } from 'express';

import accountsRoutes from './accounts.routes';
import articlesRoutes from './articles';
import authorsRoutes from './authors.routes';
import sessionsRoutes from './sessions.routes';

const routes = Router();

routes.use('/login', sessionsRoutes);
routes.use('/sign-up', accountsRoutes);

routes.use('/admin/authors', authorsRoutes);
routes.use('/admin/articles', articlesRoutes);

export default routes;
