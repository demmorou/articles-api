import {
  asClass,
  asFunction,
  asValue,
  AwilixContainer,
  createContainer,
  InjectionMode,
  Lifetime,
} from 'awilix';
import * as Knex from 'knex';
import path from 'path';

import { Config } from '~infra/config';
import AppLogger from '~infra/tools/log/Logger';
import { Logger } from '~infra/tools/log/types';

import HashHandler from '~handlers/HashHandler';
import JwtHandler from '~handlers/JwtHandler';
import IUsersRepository from '~modules/accounts/repositories/IUsersRepository';
import RegisterUser from '~modules/accounts/useCases/registerUser/RegisterUser';
import IArticlesRepository from '~modules/articles/repositories/IArticlesRepository';
import IAuthorsRepository from '~modules/authors/repositories/IAuthorsRepository';

import knexfile from '../database/knexfile';
import { DB, getModels } from '../database/models';

type AppContainer = {
  config: Config;
  logger: Logger;

  knex: Knex.Knex;

  registerUser: RegisterUser;

  usersRepository: IUsersRepository;
  authorsRepository: IAuthorsRepository;
  articlesRepository: IArticlesRepository;

  hashHandler: HashHandler;
  jwtHandler: JwtHandler;

  db: DB;
};

const setupContainer = async (config: Config): Promise<AwilixContainer> => {
  const container = createContainer({
    injectionMode: InjectionMode.PROXY,
  });

  const baseDir = path.resolve(`${__dirname}/../../`);

  container.loadModules(
    [
      `${baseDir}/modules/**/useCases/**/*.{js,ts}`,
      `${baseDir}/modules/**/repositories/implementations/*.{js,ts}`,
      `${baseDir}/adapters/handlers/*.{js,ts}`,
    ],
    {
      resolverOptions: {
        register: asClass,
        lifetime: Lifetime.SINGLETON,
      },
      formatName: 'camelCase',
    },
  );

  container.register({
    db: asFunction(getModels),
  });

  container.register({
    config: asValue(config),
    logger: asValue(AppLogger),
    knex: asValue(Knex.knex(knexfile)),
  });

  return container;
};

export { setupContainer, AppContainer };
