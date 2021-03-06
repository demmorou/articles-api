import { Router } from 'express';

import * as articlesControllers from '~controllers/articles';

const articlesRoutes = Router();

articlesRoutes.post('/', articlesControllers.registerArticleController);
articlesRoutes.get('/', articlesControllers.listArticlesController);
articlesRoutes.get('/:id', articlesControllers.showArticleController);
articlesRoutes.delete('/:id', articlesControllers.deleteArticleController);

export default articlesRoutes;
