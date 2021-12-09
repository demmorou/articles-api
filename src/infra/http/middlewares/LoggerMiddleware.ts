import { NextFunction, Request, Response } from 'express';

import { Logger } from '~infra/tools/log/types';

const loggerMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction,
): void => {
  res.reqStartedAt = Date.now();

  const logger = req.container.resolve<Logger>('logger');

  logger.info('HTTP request started', { req });

  res.on('finish', () => {
    logger.info('HTTP request finished', { req, res });
  });

  next();
};

export default loggerMiddleware;
