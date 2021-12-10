/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
import fs from 'fs';
import Knex from 'knex';
import path from 'path';

import knexfile from './knexfile';
import UserModel from './models/UserModel';

type ModelMap = {
  user: typeof UserModel;
};

export type DB = {
  models: ModelMap;
};

let db: DB = null;

export const loadModels = async (): Promise<void> => {
  const database = {
    models: {},
  };

  const knex = Knex(knexfile);

  const baseDir = `${__dirname}/models`;

  fs.readdirSync(baseDir).forEach((file) => {
    const stats = fs.statSync(path.join(baseDir, file));

    if (!stats.isDirectory() && (file.endsWith('js') || file.endsWith('ts'))) {
      const modelPath = path.join(baseDir, file);
      const model = require(modelPath).default;

      model.knex(knex);
      database.models[model.modelName] = model;
    }
  });

  db = { models: { ...database.models } } as DB;
};

export const getModels = (): DB => {
  return db;
};
