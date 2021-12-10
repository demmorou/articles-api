import 'express-async-errors';
import express from 'express';

import { Logger } from '~infra/tools/log/types';

import { config } from '../config';
import { setupContainer } from '../container';
import interceptorErrors from './interceptors/interceptorErrors';
import loggerMiddleware from './middlewares/LoggerMiddleware';
import requestScope from './middlewares/RequestScope';
import routes from './routes';

const app = express();

const { APP_PORT } = process.env;

const server = async (): Promise<void> => {
  const container = await setupContainer(config);
  const logger = container.resolve<Logger>('logger');

  app.use(requestScope(container));
  app.use(loggerMiddleware);
  app.use(express.json());

  app.use('/api', routes);

  // app.use(errors());
  app.use(interceptorErrors);

  app.listen(APP_PORT, () => {
    logger.info(`Listening on port ${APP_PORT}`);
  });
};

export default server;
