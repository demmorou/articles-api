import express from 'express';

import { Logger } from '~infra/tools/log/types';

import IUsersRepository from '~modules/accounts/repositories/IUsersRepository';

import { config } from '../config';
import { setupContainer } from '../container';
import loggerMiddleware from './middlewares/LoggerMiddleware';
import requestScope from './middlewares/RequestScope';

const app = express();

const { APP_PORT } = process.env;

const server = async (): Promise<void> => {
  const container = await setupContainer(config);
  const logger = container.resolve<Logger>('logger');

  app.use(requestScope(container));
  app.use(loggerMiddleware);
  app.use(express.json());

  // app.use(routes);

  // app.use(errors());
  // app.use(interceptorErrors);

  app.get('/', async (req, res) => {
    const ur = req.container.resolve<IUsersRepository>('usersRepository');

    await ur.create({ email: 'deusimar.comx', name: 'eu eu', password: '123' });

    return res.send({ email: 'deusimar.comc', name: 'eu eu', password: '123' });
  });

  app.listen(APP_PORT, () => {
    logger.info(`Listening on port ${APP_PORT}`);
  });
};

export default server;
