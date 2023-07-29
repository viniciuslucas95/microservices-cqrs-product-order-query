import 'reflect-metadata';
import dotenv from 'dotenv';

import Api from './api/Api';
import Registry from './infra/registry/Registry';

dotenv.config();

process.env.TZ = 'UTC';

const apiPortEnv = process.env.API_PORT;
const databaseHostEnv = process.env.DATABASE_HOST;
const databasePortEnv = process.env.DATABASE_PORT;
const databaseUsernameEnv = process.env.DATABASE_USERNAME;
const databasePasswordEnv = process.env.DATABASE_PASSWORD;
const databaseNameEnv = process.env.DATABASE_NAME;

let apiPort: number | undefined;
let databasePort: number | undefined;

if (apiPortEnv) {
  apiPort = parseInt(apiPortEnv);

  if (apiPort < 1) throw new Error('API_PORT cannot be lower than 1');
}

if (databasePortEnv) {
  databasePort = parseInt(databasePortEnv);

  if (databasePort < 1) throw new Error('DATABASE_PORT cannot be lower than 1');
}

const registry = new Registry(
  apiPort,
  databaseHostEnv,
  databasePort,
  databaseUsernameEnv,
  databasePasswordEnv,
  databaseNameEnv,
);

new Api(registry, apiPort ?? 3002).startListening();
