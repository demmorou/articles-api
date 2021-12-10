import { Router } from 'express';

import authenticateUserController from '~controllers/accounts/authenticateUserController';

const sessionsRoutes = Router();

sessionsRoutes.post('/', authenticateUserController);

export default sessionsRoutes;
