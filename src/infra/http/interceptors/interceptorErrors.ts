import { NextFunction, Request, Response } from 'express';

import AppError from '~infra/errors/AppError';
import { Logger } from '~infra/tools/log/types';

import HTTP_STATUS from '~core/http/HttpStatus';

function interceptorErrors(
  error: Error,
  _request: Request,
  response: Response,
  _next: NextFunction,
): Response {
  const logger = _request.container.resolve<Logger>('logger');

  logger.error(error.message, { err: error });

  if (error instanceof AppError) {
    return response.status(error.statusCode).json({
      status: 'error',
      message: error.message,
    });
  }

  return response
    .status(HTTP_STATUS.INTERNAL_SERVER_ERROR)
    .json({ error: 'Internal server error' });
}

export default interceptorErrors;
