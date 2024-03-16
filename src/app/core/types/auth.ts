export type authLogin = {
  email: string;
  password: string;
}

export type loginResponse = {
  token: string;
  id: number;
  email: string;
  name: string;
  lastName: string;
}
