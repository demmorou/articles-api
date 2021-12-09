type JWT = {
  secret: string;
  expiresIn: string;
};

type AppConfig = {
  timezone: string;
};

export type Config = {
  jwt: JWT;
  app: AppConfig;
};

export const config: Config = {
  jwt: {
    secret: process.env.JWT_SECRET,
    expiresIn: process.env.JWT_EXPIRES_IN,
  },
  app: {
    timezone: process.env.TZ,
  },
};
