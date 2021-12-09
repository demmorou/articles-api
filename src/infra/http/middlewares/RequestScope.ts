import { AwilixContainer } from 'awilix';
import { NextFunction, Request, Response } from 'express';
import { v4 as uuid } from 'uuid';

const requestScope = (container: AwilixContainer) => {
  return (req: Request, res: Response, next: NextFunction): void => {
    const scope = container.createScope();

    const requestId = <string>req.headers['x-request-id'] || uuid();

    req.id = requestId;

    req.container = scope;

    res.setHeader('x-request-id', requestId);

    next();
  };
};

export default requestScope;
