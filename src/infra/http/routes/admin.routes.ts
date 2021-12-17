import { Router } from 'express';

import ensureAdminAuthenticated from '../middlewares/ensureAdminAuthenticated';
import ensureAuthenticated from '../middlewares/ensureAuthenticated';
import articlesRoutes from './articles.routes';
import authorsRoutes from './authors.routes';

const adminRoutes = Router();

adminRoutes.use(ensureAuthenticated, ensureAdminAuthenticated);

adminRoutes.use('/authors', authorsRoutes);

adminRoutes.use('/articles', articlesRoutes);

export default adminRoutes;
