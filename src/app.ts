import 'dotenv/config';

import server from './infra/http/server';

const { APP_PORT } = process.env;

server.listen(+APP_PORT, () => {
  console.log(`API listening on port ${APP_PORT}`);
});
