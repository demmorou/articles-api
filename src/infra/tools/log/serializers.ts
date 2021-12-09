/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
const loggerSerializer = {
  err: (err: Error): any => {
    if (!err) {
      return null;
    }

    const logError = {
      message: `${err.message}`,
      stack: `${err.stack}`,
    };

    return logError;
  },

  req: (req: any): any => {
    if (!req) {
      return null;
    }

    const logReq = {
      id: `${req.id}`,
      method: `${req.method}`,
      path: `${req.path}`,
      ip: `${req.ip}`,
    };

    return logReq;
  },

  res: (res: any): any => {
    if (!res) {
      return null;
    }

    return {
      status: +res.statusCode,
      time: Date.now() - res.reqStartedAt,
    };
  },
};

export default loggerSerializer;
