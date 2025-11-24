export interface IJwtPayload {
  alg: string;
  typ: string;
  id: string;
  role: string;
  iat: number;
  exp: number;
}
