import { Router } from 'express';

import authenticateUserController from '~controllers/accounts/authenticateUserController';
import registerUserController from '~controllers/accounts/registerUserController';
import * as articlesControllers from '~controllers/articles';

const publicRoutes = Router();

publicRoutes.post('/login', authenticateUserController);

publicRoutes.post('/sign-up', registerUserController);

publicRoutes.get('/articles/:id', articlesControllers.showArticleController);
publicRoutes.get('/articles', articlesControllers.listArticlesController);

export default publicRoutes;
