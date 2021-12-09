import {
  asClass,
  asValue,
  AwilixContainer,
  createContainer,
  InjectionMode,
  Lifetime,
} from 'awilix';
import path from 'path';

import { Config } from '~infra/config';
import AppLogger from '~infra/tools/log/Logger';
import { Logger } from '~infra/tools/log/types';

type AppContainer = {
  config: Config;
  logger: Logger;
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
    config: asValue(config),
    logger: asValue(AppLogger),
  });

  return container;
};

export { setupContainer, AppContainer };
