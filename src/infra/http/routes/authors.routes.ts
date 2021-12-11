import { Router } from 'express';

import * as authorsControllers from '~controllers/authors';

const authorsRoutes = Router();

authorsRoutes.post('/', authorsControllers.registerAuthorController);
authorsRoutes.get('/:id', authorsControllers.showAuthorController);
authorsRoutes.delete('/:id', authorsControllers.deleteAuthorController);
authorsRoutes.put('/:id', authorsControllers.updateAuthorController);

export default authorsRoutes;
