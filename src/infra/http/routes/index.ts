import { Router } from 'express';

import adminRoutes from './admin.routes';
import publicRoutes from './public.routes';

const routes = Router();

routes.use(publicRoutes);

routes.use('/admin', adminRoutes);

export default routes;
