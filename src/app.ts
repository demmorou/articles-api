import 'dotenv/config';
import { loadModels } from '~infra/database/models';

import server from './infra/http/server';

async function init(): Promise<void> {
  await loadModels();

  server();
}

init();
