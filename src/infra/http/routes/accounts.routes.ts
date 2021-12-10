import { Router } from 'express';

import registerUserController from '~controllers/accounts/registerUserController';

const accountsRoutes = Router();

accountsRoutes.post('/', registerUserController);

export default accountsRoutes;
