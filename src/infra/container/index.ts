import {
  asValue,
  AwilixContainer,
  createContainer,
  InjectionMode,
} from 'awilix';

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

  container.register({
    config: asValue(config),
    logger: asValue(AppLogger),
  });

  return container;
};

export { setupContainer, AppContainer };
