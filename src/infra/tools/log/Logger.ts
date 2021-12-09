import pino from 'pino';
import { PrettyOptions } from 'pino-pretty';

import loggerSerializer from './serializers';
import { Logger } from './types';

const prettyOptions: PrettyOptions = {
  colorize: true,
  ignore: 'pid',
  translateTime: 'SYS:standard',
};

const pinoLogger = pino({
  name: process.env.APP_NAME,
  level: 'info',
  serializers: loggerSerializer,
  transport: {
    target: 'pino-pretty',
    options: prettyOptions,
  },
});

const log = (logType: string, message: any, data?: any): void => {
  let logger = pinoLogger;

  if (data) {
    logger = logger.child(data);
  }

  logger[logType](message);
};

const AppLogger: Logger = {
  debug: (logData: any, data?: any) => log('debug', logData, data),
  info: (logData: any, data?: any) => log('info', logData, data),
  warn: (logData: any, data?: any) => log('warn', logData, data),
  error: (logData: any, data?: any) => log('error', logData, data),
};

export default AppLogger;
