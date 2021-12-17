import { AwilixContainer } from 'awilix';

declare global {
  namespace Express {
    export interface Request {
      id: string;
      container: AwilixContainer;
      user: {
        id: string;
        isAdmin?: boolean;
      };
    }

    export interface Response {
      reqStartedAt: number;
    }
  }
}
