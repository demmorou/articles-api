import { Router } from 'express';

import accountsRoutes from './accounts.routes';
import adminRoutes from './admin.routes';
import sessionsRoutes from './sessions.routes';

const routes = Router();

routes.use('/login', sessionsRoutes);
routes.use('/sign-up', accountsRoutes);

routes.use('/admin', adminRoutes);

export default routes;
