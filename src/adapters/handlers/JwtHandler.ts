import { decode, sign, verify } from 'jsonwebtoken';

import { Config } from '~infra/config';
import { AppContainer } from '~infra/container';

type IPayload = {
  is_admin: string;
};

type JWT = {
  sub: string;
};

class JwtHandler {
  private config: Config;

  constructor(params: AppContainer) {
    this.config = params.config;
  }

  // eslint-disable-next-line @typescript-eslint/ban-types
  public sign(subject: string, payload?: string | object | Buffer): string {
    const signed = sign(payload, this.config.jwt.secret, {
      subject,
      expiresIn: this.config.jwt.expiresIn,
    });

    return signed;
  }

  public verify(token: string): string {
    const { sub: user_id } = verify(token, this.config.jwt.secret, {
      ignoreExpiration: false,
    }) as JWT;

    return user_id;
  }

  public payload(token: string): IPayload {
    const payloadDecoded = decode(token) as IPayload;

    return {
      is_admin: payloadDecoded.is_admin,
    };
  }
}

export default JwtHandler;
