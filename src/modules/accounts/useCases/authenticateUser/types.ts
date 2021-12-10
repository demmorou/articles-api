export type AuthenticateUserInput = {
  email: string;
  password: string;
};

export type AuthenticateUserOutput = {
  access_token: string;
};
